function duckCount() {
  var array = arguments;

  function CheckProperty(index, value) {
    if (array.length === index) return value;

    if (Object.prototype.hasOwnProperty.call(array[index], "quack")) value++;

    return CheckProperty(index + 1, value);
  }

  return CheckProperty(0, 0);
}

module.exports = duckCount;
