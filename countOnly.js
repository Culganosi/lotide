const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

// allItems : array of strings to iterate through
// itemsToCount: object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const results = {};

  // for of loop to iterate through elements to find # of each name
  for (const item of allItems) {
    console.log(item);
    // if statement to add number depending on whether or not there are multiples of each name
    // item = iterating through each element of the allItems array, which is firstNames in the test case
    if (itemsToCount[item]) {
      if (results[item]) {
        // adding 1 to each of the elements of allItems unless zero
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};


// Test Cases
 
const firstNames = [
  "Adam",
  "Mog",
  "Lightning",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Adam"
];

// itemstoCount == firstnames elements from array and checking to see if they are truthy?
const result1 = countOnly(firstNames, { "Adam": true, "Bob": true, "Fang": true, "Lightning": false,});

assertEqual(result1["Adam"], 2);
assertEqual(result1["Bob"], undefined);
assertEqual(result1["Fang"], 4);
assertEqual(result1["Lightning"], undefined);
