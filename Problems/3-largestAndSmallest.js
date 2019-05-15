//===============================================================
//  * Problem 3 : largest and smallest element in array
//*
//* *************************************************************
function getLargestAndSmallest(arr) {
  let largest = arr[0],
    smallest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) smallest = arr[i];
    if (arr[i] > largest) largest = arr[i];
  }
  return { largestNum: largest, smallestNum: smallest };
}
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(getLargestAndSmallest(arr));
