## No Drama LLama CLI.

A CLI tool for detecting memory leaks in your Jest tests.

## No Installation Required

There is no installation required. You can run

```bash
$ npx no-drama path/to/jest/test
```

### Additional parameters

#### `count`

Defines how many times the test runs. By default it is 10.

```bash
$ npx no-drama path/to/jest/test --count 3
```

## No Memory Leaks

Jest is a delightful test runner. However, by default it consumes more and more memory as you run your tests which makes memory leak detection a taugh job.
In order to scope memory leaks to your specific test, no-drama CLI uses [a custom `testSequencer`](https://jestjs.io/docs/en/configuration#testsequencer-string) that queues the same test multiple times. It also takes advantage of node's `--expose-gc` flag that helps Jest to clean up memory before every test run. Altogether, it forms an all-in-one tool that helps developers to focus on test-specific memory leaks.
