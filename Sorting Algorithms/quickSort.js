/** ================================= quick sort =================================
 * Quick sort follows Divide and Conquer algorithm. It is dividing elements in to smaller parts based on some condition and performing the sort operations on those divided smaller parts. Hence, it works well for large datasets. So, here are the steps how Quick sort works in simple words.
 * First select an element which is to be called as pivot element.
 * Next, compare all array elements with the selected pivot element and arrange them in such a way that, elements less than the pivot element are to it's left and greater than pivot is to it's right.
 * Finally, perform the same operations on left and right side elements to the pivot element
 * Quick sort runs with the Time Complexity of O(nlogn).
 * https://www.guru99.com/quicksort-in-javascript.html
 *
 */
var items = [5, 3, 7, 6, 2, 9];
function swap(items, leftIndex, rightIndex) {
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}
function partition(items, left, right) {
  var pivot = items[Math.floor((right + left) / 2)], //middle element
    leftIndex = left, //left pointer
    rightIndex = right; //right pointer
  while (leftIndex <= rightIndex) {
    while (items[leftIndex] < pivot) {
      leftIndex++;
    }
    while (items[rightIndex] > pivot) {
      rightIndex--;
    }
    if (leftIndex <= rightIndex) {
      swap(items, leftIndex, rightIndex); //sawpping two elements
      leftIndex++;
      rightIndex--;
    }
  }
  return leftIndex;
}

function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = partition(items, left, right); //index returned from partition
    if (left < index - 1) {
      //more elements on the left side of the pivot
      quickSort(items, left, index - 1);
    }
    if (index < right) {
      //more elements on the right side of the pivot
      quickSort(items, index, right);
    }
  }
  return items;
}
// first call to quick sort
var sortedArray = quickSort(items, 0, items.length - 1);
console.log(sortedArray); //prints [2,3,5,6,7,9]
