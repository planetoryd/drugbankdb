import { cas, db, gene_name, v } from "./prequel.ts";

let x = await db.query(
  /* surrealql */ `
  select * from drugs where $id in ${v("drugbank-id")}.*._body
`,
  { id: "DB00255" },
);

console.log(x);
