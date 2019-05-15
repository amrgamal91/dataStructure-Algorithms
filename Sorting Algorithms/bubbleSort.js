/**
 * ================================= bubble sort =================================
 * O(n^2)
 * not sufficent at all
 * It’s best case run time is O(n), or linear, which occurs if the input array is already sorted. On average, bubble sort’s run time is still quadratic.
 */

function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([6, 5, 4, 3, 2, 1]));
