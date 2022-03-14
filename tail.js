const assertEqual = require('./assertEqual');

let tail = function(arr) {
  if (arr.length === 1) {
  return arr[0]
  }
  let newArr = arr.slice(1);
  return newArr;
};

module.exports = tail;


