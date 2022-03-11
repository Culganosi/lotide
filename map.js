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

//


const words = ["bowie", "references", "are", "far", "out"];


const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);

assertArraysEqual(["bowie", "references", "are", "far", "out"], ["bowie", "references", "are", "far", "out"]); // => should PASS
assertArraysEqual(["bowie", "references", "are", "far", "out"], ["bowie", "far", "out", "maaaan"]); // => should PASS