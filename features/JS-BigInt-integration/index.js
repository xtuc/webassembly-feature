module.exports = function(buf) {
  try {
    const m = new WebAssembly.Module(buf);
    const i = new WebAssembly.Instance(m);
    i.exports.a();
    return true;
  } catch (e) {
    return false;
  }
}
