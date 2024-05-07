import Surreal, {
  RecordId,
} from "https://deno.land/x/surrealdb@v1.0.0-beta.5/mod.ts";
import flow from "npm:xml-flow";
import { createReadStream } from "node:fs";
import { sleep } from "https://deno.land/x/sleep@v1.3.0/mod.ts";

const source = createReadStream("/portable/DrugBank.xml");
const opts = {
  //  useArrays: flow.ALWAYS
};
const rder = flow(source, opts);
let x = 0;

const db = new Surreal();

await db.connect("http://127.0.0.1:8000/rpc", {
  namespace: "drugs",
  database: "drugs",
});

await db.delete("drug");

rder.on(
  "tag:drug",
  async (
    drug: { "drugbank-id": [string]; name: [string]; "cas-number": [string] },
  ) => {
    console.log(drug);
    const created = db.create("drug", drug);
    x++;

    if (x > 100) {
      rder.pause();
    }
  },
);

await sleep(200000);

async function main() {
  try {
    // Connect to the database

    // Create a new person with a random id

    // // Update a person record with a specific id
    const updated = await db.merge("person:jaime", {
      marketing: true,
    });

    // // Select all people records
    const people = await db.select("person");

    // // Perform a custom advanced query
    const groups = await db.query(
      "SELECT marketing, count() FROM type::table($tb) GROUP BY marketing",
      {
        tb: "person",
      },
    );
    console.log(people);
  } catch (e) {
    console.error("ERROR", e);
  }
}
