//===============================================================
//  * Problem 2 : remove duplicates from array
//* 1st soln : trivial soln (using built in methods in js)
//  2nd soln : trivial soln (using set )
//  3rd soln : for sorted arrays
//  4th soln : if unsorted use temp array and check if item exist in it or not
//* *************************************************************

// 1st soln :
function removeDuplicates(arr) {
  let uniques = [];
  arr.forEach(element => {
    if (uniques.indexOf(element) == -1) uniques.push(element);
  });
  return uniques;
}
var arr = [1, 2, 4, 2, 6, 3, 5, 6];
console.log(removeDuplicates(arr));
//*************************************** */

//2nd soln :
function removeDuplicates(arr) {
  var uniqueSet = new Set(arr);
  return uniqueSet;
}
var arr = [1, 2, 4, 2, 6, 3, 5, 6];
console.log(removeDuplicates(arr));
//*************************************** */

//3rd soln : for sorted arrays
function removeDuplicates(arr) {
  var uniques = [];
  var j = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] != arr[i + 1]) {
      uniques[j++] = arr[i];
    }
  }
  uniques[j++] = arr[arr.length - 1];
  return uniques;
}
var arr = [1, 2, 2, 3, 4, 4, 4, 5, 5];
console.log(removeDuplicates(arr));
