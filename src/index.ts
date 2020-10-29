import Sequencer from "@jest/test-sequencer";
import { Test } from "jest-runner";

class CustomSequencer extends Sequencer {
  sort(tests: Test[]): Test[] {
    return new Array(10).fill(tests[0]);
  }
}

export default CustomSequencer;
