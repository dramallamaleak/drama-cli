#!/usr/bin/env -S node --expose-gc

import * as path from "path";
import * as parseArgs from "minimist";
import { run } from "jest";

const config = {
  testSequencer: path.join(__dirname, "sequencer.js"),
};

let argv = parseArgs(process.argv.slice(2));
if (argv.cnt) {
  process.env.cnt = argv.cnt;
  delete argv.cnt;
}

let args: string[] = [];
Object.entries<unknown>(argv).forEach(([key, value]) => {
  args.push(key);
  args.push(String(value));
});

args.push("--config", JSON.stringify(config));
args.push("--runInBand");
args.push("--logHeapUsage");

run(args);
