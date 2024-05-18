import { db, v } from "./prequel.ts";


let r = await db.query(/* surrealql */`
DEFINE FIELD ${v("average-mass")} ON TABLE drugs TYPE float;
`)

console.log(r)