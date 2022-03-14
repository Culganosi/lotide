//Import assertEqual
const assertEqual = require('./assertEqual');

// Create a function (eqArrays) which takes 2 arrays and returns true or false depending on whether or not the arrays are the same or not

let eqArrays = function(arr1, arr2) {
  let same = true;
  if (arr1.length !== arr2.length) {
    same = false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      same = false;
    }
  }
  return same;
};

// Export
module.exports = eqArrays;

