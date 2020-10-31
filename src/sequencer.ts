import Sequencer from "@jest/test-sequencer";
import { Test } from "jest-runner";

class NoDramaSequencer extends Sequencer {
  sort(tests: Test[]): Test[] {
    return new Array(Number(process.env.cnt) || 10).fill(tests[0]);
  }
}

export default NoDramaSequencer;
