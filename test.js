const supports = require("./lib/index.js");

const [,,test, value] = process.argv;

if (supports[test]() != value) {
  console.log("test failed");
  process.exit(1);
}
