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
