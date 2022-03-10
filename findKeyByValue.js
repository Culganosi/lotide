const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};


const findKeyByValue = function(obj, val) {
  const keyRing = Object.keys(obj);
  for (let key of keyRing) {
    if (obj[key] === val)
      return key;
  }
};

// Test Cases

const bestTVShowsByGenre = {
  "sci_fi": "The Expanse", // sci_fi not camelCase so had to put brackets to pass eslint
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"); // == > pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined); // ==> pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy"); // ==> pass
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), "drama"); // ==> fail
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), ""); // ==> fail
