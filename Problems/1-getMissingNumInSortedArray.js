/**
 * Problem 1 : get the missing num in 1 to 100 integer array ?
 * *************************************************************
 * 1st soln :
 *           if there is no duplicates in the array then , all elements sum = n(n+1)/2
 *           get all the array summation then , total of all elements
 *           missing number = supposed total - actual total
 * 2nd soln :
 *          if the array is sorted and no duplicates then loop on it , check diff between each 2 elements
 *          if it not 1 then push it to missing numbers
 * 3rd soln :
 *          if there is duplicates in the array 
 *          1) XOR all the array elements, let the result of XOR be X1.
            2) XOR all numbers from 1 to n, let XOR be X2.
            3) XOR of X1 and X2 gives the missing number.
 */

//1st soln
function getMissingNum(arr) {
  let len = arr.length;
  let total = ((len + 1) * (len + 2)) / 2;
  let actualSum = 0;
  for (let i = 0; i < len; i++) {
    actualSum += arr[i];
  }
  return total - actualSum;
}
var arr = [1, 2, 4, 5, 6];
var arr2 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
console.log(getMissingNum(arr));
console.log(getMissingNum(arr2));

//2nd soln
function getMissingNum(arr) {
  var missing = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] != 1) {
      missing.push(arr[i] - 1);
    }
  }
  return missing;
}
var arr = [1, 2, 4, 5, 6];
var arr2 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
console.log(getMissingNum(arr));
console.log(getMissingNum(arr2));

//3rd soln
//xoring : https://stackoverflow.com/questions/6398427/what-does-bitwise-xor-exclusive-or-mean
//         https://hackernoon.com/xor-the-magical-bit-wise-operator-24d3012ed821
function getMissingNum(arr) {
  let x1 = arr[0];
  let x2 = 1;

  /* For xor of all the elements in array */
  for (let i = 1; i < arr.length; i++) {
    x1 = x1 ^ arr[i];
  }

  /* For xor of all the elements from 1 to n+1 */
  for (let i = 2; i <= arr.length + 1; i++) {
    x2 = x2 ^ i;
  }
  // console.log(x1);
  // console.log(x2);
  return x1 ^ x2;
}
var arr = [1, 2, 4, 5, 6];
var arr2 = [1, 2, 3, 4, 6, 7, 8, 9, 10];
console.log(getMissingNum(arr));
console.log(getMissingNum(arr2));
