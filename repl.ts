import { sleep } from "https://deno.land/x/sleep@v1.3.0/sleep.ts";
import { cas, db, gene_name, v } from "./prequel.ts";

// variables required

db;

let task = undefined;

export async function w(proc: Promise<unknown>) {
  const rx = await proc;
  console.log(rx);
  "set a break point here; enjoy the repl";
}

while (true) {
  if (!task) {
    task = sleep(0);
  }
  try {
    await task;
  } catch (x) {
    console.log(x);
  }
}

// Vscode settings
// "debug.focusEditorOnBreak": false
// "debug.console.acceptSuggestionOnEnter": "on"

// what you type in the console is, for example:
// task = w(db.query(/* surrealql */`select * from drugs`))
