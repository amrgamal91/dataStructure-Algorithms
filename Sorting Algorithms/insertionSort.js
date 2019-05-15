/** ================================= Insertion Sort =================================
 * Insertion sort will use the current item as a “key”, and then search through the items to the left of that item
 * in the input list for the place that the key should go.
 * This means that the sub-list to the left of the current “key” will already be sorted,
 * and will remain sorted after every iteration of insertion sort.
 * Insertion sort runs in O(n²), or quadratic, time in the worst case.
 *  This typically isn’t very effective and should not be used for large lists
 * https://medium.com/javascript-algorithms/javascript-algorithms-insertion-sort-59b6b655373c
 */
let insertionSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};

console.log(insertionSort([6, 5, 4, 3, 2, 1]));
console.log(insertionSort([2, 3, 1, 4, 6]));
console.log(insertionSort([5, 3, 1, 4, 6]));
