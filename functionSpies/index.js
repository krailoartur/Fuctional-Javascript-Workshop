function Spy(target, method) {
  const originFun = target[method];

  this.count = 0;

  target[method] = () => {
    this.count++;
    return originFun.apply(this, arguments);
  };
  return this;
}

module.exports = Spy;
