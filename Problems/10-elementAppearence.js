//===================================================================================
//  * Problem 10 : Given an array of of size n and a number k,
//                 find all elements that appear more than n/k times
//  [3, 1, 2, 2, 1, 2, 3, 3], k=4  ==> [2,3]
//  [10,15,1,2,3,4,5,11,12]   ==> 1 2 3 4 5
//* *********************************************************************************
function findNKnum(arr, k) {
  let occurences = arr.length / k;
  let nums = [];
  let theMap = new Map();
  for (let i = 0; i < arr.length; i++) {
    if (!theMap.get(arr[i])) {
      theMap.set(arr[i], 1);
    } else {
      theMap.set(arr[i], theMap.get(arr[i]) + 1);
    }
  }
  for (const [k, v] of theMap) {
    if (v == occurences) {
      nums.push(k);
    }
  }
  return nums;
}
console.log(findNKnum([10, 10, 1, 2, 3, 2, 5, 11], 4));
