function repeat(operation, num) {
  if (num <= 0) return;

  setTimeout(() => {
    operation();
    repeat(operation, --num);
  }, 0);
}

module.exports = repeat;
