module.exports = function(buf) {
  return WebAssembly.validate(buf);
}
