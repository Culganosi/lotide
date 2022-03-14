const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true); // => should fail
assertEqual(eqArrays([1, 2, 1, 4, 5], [1, 2, 3]), true); // => should fail
assertEqual(eqArrays([1, 1, 3, 4, 5], [1, 1, 3, 4, 5]), true); // => should pass
assertEqual(eqArrays([0], [0]), true); // => should pass
assertEqual(eqArrays([-1, -2, -3], [-1, -2, -3]), true); // => should pass
assertEqual(eqArrays([-1, -2, -3], [-1, 2, -3]), true); // => should fail