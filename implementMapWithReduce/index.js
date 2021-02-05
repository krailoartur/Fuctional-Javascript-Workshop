module.exports = function arrayMap(inputArray, fn, thisArg) {
  return inputArray.reduce((acc, curr, index, reduceArray) => {
    acc.push(fn.call(thisArg, curr, index, reduceArray));
    return acc;
  }, []);
};
