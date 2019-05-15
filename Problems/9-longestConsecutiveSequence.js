//===================================================================================
//  * Problem 9 : find length of longest consecutive sequence in array of integers
//  [100, 4, 200, 1, 3, 2],   ==> 1 2 3 4
//  [10,15,1,2,3,4,5,11,12]   ==> 1 2 3 4 5
//* *********************************************************************************
function findLongestSequence(arr) {
  let temp = [];
  let allSequences = [];
  let lastNum = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (Math.abs(arr[i] - lastNum) == 1) {
      temp.push(arr[i]);
      lastNum = arr[i];
    } else {
      temp.push(lastNum);
      lastNum = arr[i];
      allSequences.push(temp);
      temp = [];
    }
  }
  var max = 0;
  var longest = [];
  allSequences.forEach(function(element) {
    if (element.length > max) {
      max = element.length;
      longest = element;
    }
  });
  return longest;
}

console.log(findLongestSequence([10, 15, 1, 2, 3, 4, 5, 11, 12]));
console.log(findLongestSequence([100, 4, 200, 1, 3, 2]));

function getLongestConsecutive(arr) {
  var mySet = new Set(arr);

  var max = 0;
  for (let i = 0; i < arr.length; i++) {
    var count = 1;
    var k = arr[i];
    var left = k + 1;
    var right = k - 1;
    while (mySet.has(left)) {
      count++;
      mySet.delete(left);
      left++;
    }

    while (mySet.has(right)) {
      count++;
      mySet.delete(right);
      right--;
    }
    max = count > max ? count : max;
  }
  return max;
}
console.log(getLongestConsecutive([10, 15, 1, 2, 3, 4, 5, 11, 12]));
console.log(getLongestConsecutive([100, 4, 200, 1, 3, 2]));
