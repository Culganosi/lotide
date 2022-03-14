const middle = function(arr) {
  let result = [];
  let middle = Math.floor(arr.length / 2);
  if (arr.length <= 2) {
    return result;
  } else if (arr.length % 2 === 0) {
  // want 2 numbers if it is an even array
    result.unshift(arr[middle]);
    result.unshift(arr[middle - 1]);
    return result;
  } else {
    result.unshift(arr[middle]);
    return result;
  }
};

module.exports = middle;
