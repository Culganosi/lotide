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

const takeUntil = (array,callback) => {
  const newArr = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      return newArr;
    }
    newArr.push(array[i]);
  }
  return newArr;
};



const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(results2);

const data3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const results3 = takeUntil(data3, x => x > 10);
console.log(results3);

const data4 = ["I've", "been", "to", "Disney", "World!"];
const results4 = takeUntil(data4, x => x === '!');
console.log(results4);

assertArraysEqual(results1, results1); // => should PASS
assertArraysEqual(results2, results4); // => should fail