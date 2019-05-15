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

/**
 * =================================  Merge Sort =================================
 * It all revolves around the idea that it’s easier to sort two sorted arrays rather than one unsorted one.
 * Once we have our two sorted arrays we start comparing their items one by one and adding the smaller item in our result list
 * https://www.hackerearth.com/practice/algorithms/sorting/merge-sort/visualize/
 * https://hackernoon.com/programming-with-js-merge-sort-deb677b777c0
 * complexity : It's O(n * log(n)), not O(log(n)). As you've accurately surmised, the entire input must be iterated through,
 * and this must occur O(log(n)) times (the input can only be halved O(log(n)) times). n items iterated log(n) times gives O(n log(n)).
 * It's been proven that no comparison sort can operate faster than this.
 * Only sorts that rely on a special property of the input such as radix sort can beat this complexity.
 * The constant factors of mergesort are typically not that great though so algorithms with worse complexity can often take less time
 */

let mergeSort = arr => {
  if (arr.length == 1) return arr;
  const middle = Math.floor(arr.length / 2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
};

let merge = (left, right) => {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
};

const list = [2, 5, 1, 3, 7, 2, 3, 8, 6, 3];
console.log(mergeSort(list)); // [ 1, 2, 2, 3, 3, 3, 5, 6, 7, 8 ]

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

/** ================================= bucket sort =================================
 *  http://www.personal.kent.edu/~rmuhamma/Algorithms/MyAlgorithms/Sorting/bucketSort.htm
 * https://www.growingwiththeweb.com/2015/06/bucket-sort.html
 * Bucket sort is a comparison sort algorithm that operates on elements by dividing them into different buckets and then sorting these buckets individually. 
 * Each bucket is sorted individually using a separate sorting algorithm or by applying the bucket sort algorithm recursively. 
 * Bucket sort is mainly useful when the input is uniformly distributed over a range.
 * Bucket sort can be exceptionally fast because of the way elements are assigned to buckets, typically using an array where the index is the value.
 * This means that more auxiliary memory is required for the buckets at the cost of running time than more comparison sorts. It runs in 
    O(n+k) time in the average case where n is the number of elements to be sorted and k is the number of buckets
 */

function bucketSort(array, bucketSize) {
  if (array.length === 0) {
    return array;
  }

  // Determine minimum and maximum values
  var i;
  var minValue = array[0];
  var maxValue = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minValue = array[i];
    } else if (array[i] > maxValue) {
      maxValue = array[i];
    }
  }

  // Initialise buckets
  var DEFAULT_BUCKET_SIZE = 5;
  bucketSize = bucketSize || DEFAULT_BUCKET_SIZE;
  var bucketsCount = Math.floor((maxValue - minValue) / bucketSize) + 1; //get num of buckets
  var buckets = new Array(bucketsCount);
  for (i = 0; i < buckets.length; i++) {
    buckets[i] = [];
  }

  // Distribute input array values into buckets
  for (i = 0; i < array.length; i++) {
    var index = Math.floor((array[i] - minValue) / bucketSize);
    buckets[index].push(array[i]);
  }

  // Sort buckets and place back into input array
  array.length = 0;
  for (i = 0; i < buckets.length; i++) {
    insertionSort(buckets[i]);
    for (var j = 0; j < buckets[i].length; j++) {
      array.push(buckets[i][j]);
    }
  }

  return array;
}

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
