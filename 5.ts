import { cas, db, gene_name, v } from "./prequel.ts";

let x = await db.query(
  /* surrealql */ `
  select * from drugs limit 5
`,
);

console.log(x);
