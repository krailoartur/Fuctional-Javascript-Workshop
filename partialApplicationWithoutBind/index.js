function logger(namespace) {
  return function () {
    console.log.apply(this, [
      namespace,
      ...Array.prototype.slice.call(arguments),
    ]);
  };
}

module.exports = logger;
