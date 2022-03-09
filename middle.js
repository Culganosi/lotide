const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✔✔✔Assertion Passed:  ${arr1} === ${arr2}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const eqArrays = function(arr1, arr2) {
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

const calcMiddle = function(arr) {
  let result = [];
  let middle = Math.floor(arr.length / 2);
  // make sure if we have an array less or equal to 2 elements we return an empty array
  if (arr.length <= 2) {
    return result;
    // check to see if the array is even, if not then else return odd
  } else if (arr.length % 2 === 0) {
  // want 2 numbers if it is an even array
    result.unshift(arr[middle]);
    result.unshift(arr[middle - 1]);
    return result;
  } else {
  // only need 1 number to come back since the array is odd
    result.unshift(arr[middle]);
    return result;
  }
};

assertArraysEqual(calcMiddle([1]), []);
assertArraysEqual(calcMiddle([1, 2]), []);
assertArraysEqual(calcMiddle([1, 2, 3]), [2]);
assertArraysEqual(calcMiddle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(calcMiddle([5, 6, 4]), [6]);
assertArraysEqual(calcMiddle([6, 5, 1, 5]), [5, 1]);
assertArraysEqual(calcMiddle([1, 2, 1]), [1]);
assertArraysEqual(calcMiddle([1, 0, 1]), [10]);
assertArraysEqual(calcMiddle([1, 1, 1 ,1]), [10]);


/*console.log(calcMiddle([1, 2, 3])) /// => [2]
console.log(calcMiddle([1, 2, 3, 4])) // => [2, 3]
console.log(calcMiddle([1, 2, 3, 4, 5, 6])) // => [3, 4]
console.log(calcMiddle([1])) // => []
console.log(calcMiddle([])) // => []
*/