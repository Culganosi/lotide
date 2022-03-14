const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const item of allItems) {
    console.log(item);
    if (itemsToCount[item]) {
      if (results[item]) {
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
