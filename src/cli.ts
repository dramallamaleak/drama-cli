#!/usr/bin/env -S node --expose-gc

import * as path from "path";
import { run } from "jest";

const config = {
  testSequencer: path.join(__dirname, "sequencer.js"),
};

let args = [...process.argv.slice(2)];
args.push("--config", JSON.stringify(config));
args.push("--runInBand");
args.push("--logHeapUsage");

run(args);
