const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Create a function (eqArrays) which takes 2 arrays and returns true or false depending on whether or not the arrays are the same or not

let eqArrays = function(arr1, arr2) {
  /* create variable to hold true||false to determine if the arrays are the same or not, set the var to true to start
   and use comparisons further down to see if it is false, if it is false then we will return that they are the same
   */
  let same = true;
  // Check to see if the arrays are not the same length, if they are not the same, no point in further comparison and result is false
  if (arr1.length !== arr2.length) {
    same = false;
  }
  // Both arrays passed the check above, and we now iterate through a for loop
  for (let i = 0; i < arr1.length; i++) {
    // comparison to see if the values within the arrays are not the same, if not the same, no point in further comparison and result is false
    if (arr1[i] !== arr2[i]) {
      same = false;
    }
    // returning same (which should still be true) because none of the comparison checks showed that the arrays were !== to each other
  }
  return same;
};

// Test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true); // => should fail
assertEqual(eqArrays([1, 2, 1, 4, 5], [1, 2, 3]), true); // => should fail
assertEqual(eqArrays([1, 1, 3, 4, 5], [1, 1, 3, 4, 5]), true); // => should pass
assertEqual(eqArrays([0], [0]), true); // => should pass
assertEqual(eqArrays([-1, -2, -3], [-1, -2, -3]), true); // => should pass
assertEqual(eqArrays([-1, -2, -3], [-1, 2, -3]), true); // => should fail


