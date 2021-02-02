function reduce(arr, fn, initial) {
  function Q(index, value) {
    if (index > arr.length - 1) return value;

    return Q(index + 1, fn(value, arr[index], index, arr));
  }

  return Q(0, initial);
}

module.exports = reduce;
