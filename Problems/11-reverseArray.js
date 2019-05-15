//===================================================================================
//  * Problem 11 : Reverse array in place
//* *********************************************************************************
function reverse(arr) {
  let start = 0;
  let end = arr.length - 1;
  let mid = arr.length / 2;
  while (start < mid && end > mid) {
    let temp = arr[start];
    arr[start] = arr[end];
    arr[end] = temp;
    start++;
    end--;
  }
  return arr;
}

console.log(reverse([1, 2, 3, 4, 5, 6, 7, 8]));
