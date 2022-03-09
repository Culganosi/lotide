const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✔✔✔Assertion Passed:  ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


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

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should fail
assertArraysEqual([1, 2, 1, 4, 5], [1, 2, 3]); // => should fail
assertArraysEqual([1, 1, 3, 4, 5], [1, 1, 3, 4, 5]); // => should pass
assertArraysEqual([0], [0]); // => should pass
assertArraysEqual([-1, -2, -3], [-1, -2, -3]); // => should pass
assertArraysEqual([-1, -2, -3], [-1, 2, -3]); // => should fail