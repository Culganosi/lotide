const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');
const middle = require('../middle');


//Tests
assertArraysEqual(middle([1]), []);
assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([5, 6, 4]), [6]);
assertArraysEqual(middle([6, 5, 1, 5]), [5, 1]);
assertArraysEqual(middle([1, 2, 1]), [1]);
assertArraysEqual(middle([1, 0, 1]), [10]);
assertArraysEqual(middle([1, 1, 1 ,1]), [10]);
