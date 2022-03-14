
const assertArraysEqual = require('../assertArraysEqual');

assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3], [1, 2, 4]); // => should fail
assertArraysEqual([1, 2, 1, 4, 5], [1, 2, 3]); // => should fail
assertArraysEqual([1, 1, 3, 4, 5], [1, 1, 3, 4, 5]); // => should pass
assertArraysEqual([0], [0]); // => should pass
assertArraysEqual([-1, -2, -3], [-1, -2, -3]); // => should pass
assertArraysEqual([-1, -2, -3], [-1, 2, -3]); // => should fail