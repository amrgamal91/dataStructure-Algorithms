/**  ================================= selection sort =================================
 * Selection Sort is one of the most simple sorting algorithms. It works in the following way,
    1- Find the smallest element. Swap it with the first element.
    2- Find the second smallest element. Swap it with the second element.
    3- Find the third smallest element. Swap it with the third element.
    4- Repeat finding the next smallest element and swapping it into the corresponding correct position till the array is sorted.
    As you can guess, this algorithm is called Selection Sort because it repeatedly selects the next smallest element and swaps it into its place.
    Space Complexity: O(n)
    Time Complexity: O(n2)
    Sorting in Place: Yes
*/

let selectionSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    var min = i;
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (min !== i) {
      swap(arr, i, min);
    }
  }
  return arr;
};
let swap = (arr, x, y) => {
  var temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};
const list = [5, 3, 2, 7, 1];
console.log(selectionSort(list));
