# uvu-context-thrown-error

When using test suites, and a `before` or `before.each` throws an error, the only indication of the error being thrown is that the number of tests passed is 0 when there is 1 test in total.

## Expected Behavior

The error being thrown should be bubbled up and reported as any other error would be

## Reproduction steps

```sh
git clone
cd uvu-context-error
pnpm i / npm i / yarn
node index 
```

## Other Information

I get the same outcome whether using `uvu` as a CLI (like the `test` script does) or calling the file directly

```
❯ node index.js
 This suite will not report an error from the before context, just that no tests were ran    (0 / 1)

  Total:     1
  Passed:    0
  Skipped:   0
  Duration:  1.06ms
```

```
❯ pnpm test

> uvu-before-fail@0.0.0 test ~/uvu-before-fail
> uvu . index\.js

index.js
 This suite will not report an error from the before context, just that no tests were ran    (0 / 1)

  Total:     1
  Passed:    0
  Skipped:   0
  Duration:  0.88ms
  ```