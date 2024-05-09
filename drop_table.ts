import Surreal, {
  RecordId,
} from "https://deno.land/x/surrealdb@v1.0.0-beta.5/mod.ts";
import { sleep } from "https://deno.land/x/sleep@v1.3.0/mod.ts";

const db = new Surreal();

await db.connect("http://127.0.0.1:8000/rpc", {
  namespace: "drugs",
  database: "drugs",
});

await db.delete("drugs");

console.log("done")