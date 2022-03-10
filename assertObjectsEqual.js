
const eqObjects = function(obj1, obj2) {
  const arr1 = Object.keys(obj1);
  const arr2 = Object.keys(obj2);
  if (arr1.length !== arr2.length)
    return false;

  for (let key of arr1) {
    if (Array.isArray(arr1[key]) && Array.isArray(arr2[key])) {
      return eqArrays(arr1[key], arr2[key]);
    } else if (arr1[key] !== arr2[key]) {
      return false;
    }
    return true;
  }
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✔✔✔Assertion Passed:   ${inspect(actual)} ===  ${inspect(expected)}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed:  ${inspect(actual)} !== ${inspect(expected)}`);
  }
};



// Tests


console.log(assertObjectsEqual({ a: "1", b: "2" }, { b: "2", a: "1" })); // pass
console.log(assertObjectsEqual({ a: "1", b: "2", c: "3" }, { a: "1", b: "2"})); // fail
console.log(assertObjectsEqual({ a: "1" }, { b: "2" })); // pass
