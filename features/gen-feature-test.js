const {join} = require("path");
const [,, featureDir] = process.argv;

let json = "";
process.stdin.on('data', (chunk) => {
  json += chunk;
});

const featureTestFile = join(featureDir, "./index.js");
const featureName = featureDir.split("/")[2];

process.stdin.on('end', () => {
  const obj = JSON.parse(json);
  const array = Object.keys(obj).map(key => obj[key]);
  console.log(`
module.exports["${featureName}"] = function test() {
  return WebAssembly.validate(new Uint8Array([${array.join()}]));
}`);
});
