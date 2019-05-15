/**
 * ================================= Counting Sort =================================
 * The idea of counting sort is to start by initializing an auxiliary array of length k,
 * that will hold the count of each number. Each index has an initial value of 0.
 * After that, you loop through the input array and increase the “count” for each value by 1 every time you encounter that number
 * in the array.
 * Now, the auxiliary array holds the number of times each element is in the input array.
 * The last step is to loop from the minimum value to the maximum value.
 * In this loop, you’ll loop through each corresponding value in the count array, and add the elements who’s count is greater than 0 to the array in sequential order.
 * Counting sort is a stable sort, and runs in O(n + k), or linear, time where n is the size of the input list and k is the value of the max element in the input array.
 */
let countingSort = (arr, min, max) => {
  let i = min,
    j = 0,
    count = [];
  for (i; i <= max; i++) {
    count[i] = 0;
  }
  for (i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }
  for (i = min; i <= max; i++) {
    while (count[i] > 0) {
      arr[j] = i;
      j++;
      count[i]--;
    }
  }
  return arr;
};
