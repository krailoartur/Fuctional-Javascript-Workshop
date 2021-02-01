function repeat(operation, num) {
  operation();
  return num > 1 ? repeat(operation, num - 1) : false;
}

module.exports = repeat;
