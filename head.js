// Remove the function definition for asserEqual
/* const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};
*/

// Add the require code which will pull the assertEqual function from assertEqual.js
const assertEqual = require('./assertEqual');


let head = function(arr){
  return arr[0];
}

module.exports = head;
// assertEqual(head([5, 6, 7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

