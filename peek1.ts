import Surreal, {
  RecordId,
} from "https://deno.land/x/surrealdb@v1.0.0-beta.5/mod.ts";

const db = new Surreal();

await db.connect("http://127.0.0.1:8000/rpc", {
  namespace: "drugs",
  database: "drugs",
});
// all records, 16582
// select array::distinct(${"`cas-number`"}) as el from drugs group all, 10070

const cas = "`cas-number`";

if (false) {
  let rs = await db.query(
    /* surrealql */ `select count() as c, ${cas} from drugs group by ${cas}  order by c desc limit 10;
       `,
  );
}

// /usr/local/bin/deno run --inspect-wait --allow-all ./peek1.ts
// (1) [Array(10)]
// 0: (10) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// 0: {c: 6480, cas-number: undefined}
// 1: {c: 7, cas-number: '9005-49-6'}
// 2: {c: 4, cas-number: '25322-68-3'}
// 3: {c: 3, cas-number: '691397-13-4'}
// 4: {c: 2, cas-number: '1035270-39-3'}
// 5: {c: 2, cas-number: '109319-16-6'}
// 6: {c: 2, cas-number: '128446-35-5'}
// 7: {c: 2, cas-number: '135-16-0'}
// 8: {c: 2, cas-number: '139096-04-1'}
// 9: {c: 2, cas-number: '1417412-83-9'}
// length: 10
// [[Prototype]]: Object
// [[Prototype]]: Object
// length: 1
// [[Prototype]]: Object
// [[Prototype]]: Object

let rs = await db.query(
  /* surrealql */ `select * from drugs limit 1;
   `,
);

console.log(rs);
