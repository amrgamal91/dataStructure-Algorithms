//===================================================================================
//  * Problem 17 : find all permutations of a string
//* *********************************************************************************
let count = 0;

function permutation(str, prefix) {
  if (str.length === 0) {
    count++;
    //console.log(count, "prefix: ", prefix);
  } else {
    for (let i = 0; i < str.length; i++) {
      // if indexEnd specified, not included in substring returned
      //   console.log("substring 0 to i " + str.substring(0, i));
      //   console.log("substring i+1 " + str.substring(i + 1));

      let rem = str.substring(0, i) + str.substring(i + 1);
      //   console.log("rem= " + rem);
      permutation(rem, prefix + str.charAt(i));
    }
  }
}
permutation("cat", "");

//print array elements recursively
function displayArray(arr) {
  if (arr.length == 0) return;
  console.log(arr[0]);
  return displayArray(arr.slice(1, arr.length));
}

console.log(displayArray([1, 2, 3, 4, 5, 6]));

//check if palindrome recursion  ??
function checkPalindrome(str) {
  if (str.length == 1) return true;
  if (str[str.length - 1] == str[0]) {
    return checkPalindrome(str.splice(1, str.length - 1));
  }
}

//a to the power b recursively
function calculatePower(base, power) {
  if (power == 1) return base;
  return base * calculatePower(base, power - 1);
}
console.log(calculatePower(5, 3));
