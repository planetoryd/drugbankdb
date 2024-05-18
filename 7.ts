import { cas, db, gene_name, v } from "./prequel.ts";

// let x = await db.query(
//   /* surrealql */ `
//   let $r1 = select *, (if type::is::array(targets.target) then array::len(targets.target) else 0 end) as c from drugs order by c desc limit 10;
//   return $r1;
//   return select targets from $r1;
// `,
//   {},
// );

// let x = await db.query(
//   /* surrealql */ `
//   return type::is::array([2]);
// `,
//   {},
// );

// console.log(x);

// the drug with most targets is Fostmatinib, with 300
