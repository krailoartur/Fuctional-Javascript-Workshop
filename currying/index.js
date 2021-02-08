function curryN(fn, n = fn.length, args = []) {
  return n != 1
    ? function (arg) {
        return curryN.call(null, fn, n - 1, args.concat(arg));
      }
    : function (arg) {
        return fn(...args.concat(arg));
      };
}

module.exports = curryN;
