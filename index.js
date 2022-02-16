const { suite } = require("uvu");
const { ok } = require("uvu/assert");

const TestSuite = suite(
  "This suite will not report an error from the before context, just that no tests were ran"
);
TestSuite.before(() => {
  throw new Error("You will never see this");
});
TestSuite("I should be reported on!", () => {
  ok(true);
});
TestSuite.run();
