import { cas, db, gene_name, v } from "./prequel.ts";

let candidates_small = ["Fruquintinib", "Axitinib", "Vatalanib", "Denibulin"];
let candidate_peptides = [
  "Aflibercept",
  "IMC-1C11",
  "Faricimab",
  "Vanucizumab",
];

let x = await db.query(
  /* surrealql */ `
  let $a = select *, count(targets.target) as tc from drugs where name in $candidates
  order by tc asc;
  return $a;
  return select ${cas}, indication, categories, ${
    v("average-mass")
  }, groups.group, targets, ${v("half-life")}, ${
    v("mechanism-of-action")
  }, toxicity, name from $a;
  select name from $a;
`,
  { candidates: [...candidate_peptides, ...candidates_small] },
);

console.log(x);

