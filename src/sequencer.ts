import Sequencer from "@jest/test-sequencer";
import { Test } from "jest-runner";
import { EnvStorage } from "./EnvStorage";

class NoDramaSequencer extends Sequencer {
  sort(tests: Test[]): Test[] {
    const count = Number(EnvStorage.get("count", 10));
    return new Array(count).fill(tests[0]);
  }
}

export default NoDramaSequencer;
