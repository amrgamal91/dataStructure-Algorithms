//===============================================================
//  * Problem 4 : find all pairs of an integer array whose sum is equal to a given number
//* 1st soln : trivial using 2 loops O(n^2)
//  2nd soln : using set
//* *************************************************************

//1st soln
function getPair(arr, sum) {
  var num1, num2;
  var allPairs = [];
  for (let i = 0; i < arr.length; i++) {
    num1 = arr[i];
    for (let j = 0; j < arr.length; j++) {
      if (num1 + arr[j] == sum) {
        num2 = arr[j];
        var pair = { first: num1, second: num2 };
        allPairs.push(pair);
      }
    }
  }
  return allPairs;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getPair(arr, 9));

//2nd soln:
function getPair(arr, sum) {
  var num1, num2;
  var allPairs = [];
  var numSet = new Set(arr);
  for (let i = 0; i < arr.length; i++) {
    if (numSet.has(sum - arr[i])) {
      var pair = { first: arr[i], second: sum - arr[i] };
      allPairs.push(pair);
    }
  }
  return allPairs;
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getPair(arr, 9));
