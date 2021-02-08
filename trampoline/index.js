function repeat(operation, num) {
  if (num <= 0) return;

  setTimeout(() => {
    operation();
    repeat(operation, --num);
  });
}

module.exports = function (operation, num) {
  return repeat(operation, num);
};
