/**
 * ================================= radix sort =================================
 * Radix sort is a non-comparative sorting algorithm. This sorting algorithm works on the integer keys by grouping digits which share the same position and value. The radix is the base of a number system. As we know that in the decimal system the radix or base is 10. So for sorting some decimal numbers,
 * we need 10 positional boxes to store numbers
 * Time Complexity: O(nk)
 * Space Complexity: O(n+k)
 * https://reactgo.com/radix-sort-algorithm-javascript/        //very important to check the link to understand
 */

/**
 * returns the number in that place for example :
 * (243,1) ==> 4   (123,0) ==> 3  (943,2) ==> 9
 */
function getPosition(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10;
} // gives back bucket index

/**
 * returs the length of the longest num
 */
function getMax(arr) {
  let max = 0;
  for (let num of arr) {
    if (max < num.toString().length) {
      max = num.toString().length;
    }
  }
  return max;
}
/**
 * radix sort algorithm itself
 */
function radixSort(arr) {
  const max = getMax(arr);

  for (let i = 0; i < max; i++) {
    let buckets = Array.from({ length: 10 }, () => []); // creating 10 empty arrays

    for (let j = 0; j < arr.length; j++) {
      let position = getPosition(arr[j], i);
      buckets[position].push(arr[j]); //push the number into desired bucket
    }
    arr = [].concat(...buckets);
  }
  return arr;
}

console.log(radixSort([4, 933, 233, 3222, 1, 7, 5]));
