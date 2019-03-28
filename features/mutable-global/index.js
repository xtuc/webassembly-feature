module.exports = function(buf) {
  try {
    const a = new WebAssembly.Global({ type: 'f64', mutable: true });
    const m = new WebAssembly.Module(buf);
    const i = new WebAssembly.Instance(m, { a: { a } });
    return true;
  } catch (e) {
    return false;
  }
}
