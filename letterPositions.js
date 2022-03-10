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



const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") { // eliminate spaces
      if (results[sentence[i]]) { // truthy
         results[sentence[i]].push(i) // so we will push to array // push(i) works but not push[i], if its a method i can't call it with .push[] only .push()
      } else {
        results[sentence[i]] = [i];
      }
  }
}
  return results;
};


// Test code
assertArraysEqual(letterPositions("hello").e, [1]); //==> pass
assertArraysEqual(letterPositions("hello").h, [0]); //== > pass
assertArraysEqual(letterPositions("hello").l, [2,3]); //==> pass
assertArraysEqual(letterPositions("hello").l, [2]); //==> fail (need 2,3 because we have 2 'l''s in position [2] & [3] of 'hello' )
assertArraysEqual(letterPositions("hello").o, [4]); //==> pass
assertArraysEqual(letterPositions("hello").o, [5]); // ==> fail