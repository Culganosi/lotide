const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✔✔✔Assertion Passed:  ${actual} === ${expected}`);
  } else {
    console.log(`⛔⛔⛔Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(string) {
  const results = {};
  //for of loop to iterate through elements of a string to 
  for (const letters of string) {
    //  console.log(letters);
    // to remove spaces we must use the following if statement
    if (letters !== " ") {
      //  console.log(letters) 

      if (results[letters]) {
        // if exists we add one 1 to results 
        results[letters] += 1;
      } else {
        // if doesn't exist -- create
        results[letters] = 1;
      }
    }
  }
  return results;
}

console.log(countLetters("LHL"));
console.log(countLetters("lighthouse in the house"));
console.log(countLetters("s p a c e s ?"));
console.log(countLetters("!@#$%^&*()"));
console.log(countLetters("!!@@##$$%%^^&&**(())"));
