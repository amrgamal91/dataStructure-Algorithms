//===============================================================
//  * Problem 7 : Find if there is a subarray with 0 sum
/**
 * Input: {4, 2, -3, 1, 6}
Output: true 
There is a subarray with zero sum from index 1 to 3.
Input: {-3, 2, 3, 1, 6}
Output: false

arr[] = {1, 4, -2, -2, 5, -4, 3}

If we consider all prefix sums, we can
notice that there is a subarray with 0
sum when :
1) Either a prefix sum repeats or
2) Or prefix sum becomes 0.

Prefix sums for above array are:
1, 5, 3, 1, 6, 2, 5

Since prefix sum 1 repeats, we have a subarray
with 0 sum. 
 */
//* *************************************************************
function subArrayExists(arr) {
  // Creates an empty hashMap hM
  var hM = new Array();
  var sum = 0;
  // Traverse through the given array
  for (let i = 0; i < arr.Length; i++) {
    // Add current element to sum
    sum += arr[i];

    // Return true in following cases
    // a) Current element is 0
    // b) sum of elements from 0 to i is 0
    // c) sum is already present in hash map
    if (arr[i] == 0 || sum == 0) return true;

    // Add sum to hash map
    hM[i] = sum;
  }

  // We reach here only when there is
  // no subarray with 0 sum
  return false;
}
