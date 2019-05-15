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
