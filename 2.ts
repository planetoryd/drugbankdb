import { cas, db, gene_name, v } from "./prequel.ts";

let x = await db.query(/* surrealql */ `
  let $a = select *, count(targets.target) as tc from drugs where ["BE0000163", "BE0000029"] ANYINSIDE targets.target.id 
  and type != "small molecule"
  and ["Hepatotoxic Agents"] noneinside categories.category.category
  order by tc asc;
  return $a;
  return select indication, categories, ${
  v("average-mass")
}, groups.group, targets, ${v("half-life")}, ${
  v("mechanism-of-action")
}, toxicity, name from $a;
  select name from $a;
`);

// let x = await db.query(/* surrealql */ `
//   let $a = select * from drugs where name == "Sunitinib";
//   return $a;
// `);

// let x = await db.query(/* surrealql */ `
//   let $a = select * from drugs where ${cas}=="216974-75-3";
//   return $a;
//   select name from $a;
// `);

// Deno.writeTextFile("./var/vegf-small.json", JSON.stringify(x, null, 2));

console.log(x);

