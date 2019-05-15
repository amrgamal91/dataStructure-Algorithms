////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// map() //////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
// The map function is available on a JavaScript array. Using this function,
// we can get a new array by applying a transformation function on each and every element in the array.
//  The general syntax for JS array map operation is:

arr.map(elem => {
  process(elem);
  return processedValue;
}); // returns new array with each element processed

// Suppose, there are few unwanted characters entered into serial keys we are working with recently.
// We need to remove them. Instead of removing the character by iterating and finding,
//  we can use map to perform the same operation and get result array.

var data = ["2345-34r", "2e345-211", "543-67i4", "346-598"];
var re = /[a-z A-Z]/;
var cleanedData = data.map(elem => {
  return elem.replace(re, "");
});
console.log(cleanedData); // ["2345-34", "2345-211", "543-674", "346-598"]

// The map takes a function as an argument. That function has an argument. That argument is picked from the array.
//  We need to return the processed element and that will be applicable to all elements in the array.

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// reduce() ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Reduce function reduces a given list to one final result. We can also do the same thing by iterating the array
//  and saving the intermediate result in a variable. But here this is a cleaner way to reduce an array to a value.
//  The general syntax for JS reduce operation is:
arr.reduce((accumulator, currentValue, currentIndex) => {
  process(accumulator, currentValue);
  return intermediateValue / finalValue;
}, initialAccumulatorValue); // returns reduced value

// The accumulator stores the intermediate and final value.
// The currentIndex, currentValue are index, value of the element from the array respectively.
// initialAccumulatorValue passes that value to accumulator argument.
// One practical application for reduce can be flattening an array of arrays.
//Flattening is converting internal arrays to one single array. For Ex:

var arr = [[1, 2], [3, 4], [5, 6]];
var flattenedArray = [1, 2, 3, 4, 5, 6];

// We can achieve this by normal iteration. But using reduce, it is a straight code. Magic!

var flattenedArray = arr.reduce((accumulator, currentValue) => {
  return accumulator.concat(currentValue);
}, []); // returns [1, 2, 3, 4, 5, 6]

// calculate the sum of array elements
//0 here is the initial accumlator value
const sum = arr => arr.reduce((total, item) => (total += item), 0);

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// find() ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Find works on an array and return the first element that satisfy the condition in function.
// definition
collection.find(item => {
  // return first element that satisfy the condition
});
// example
const arr = [1, 2, 8, 4, 5];
const value = arr.find(i => i % 4 == 0);
// return the first value i.e 8

//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////// filter() ////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////

// definition
collection.filter((currentValue, index) => {
  // logic to filter array on
});
// example
const arr = [1, 2, 3, 4, 5];
const newArray = arr.filter(i => i % 2 == 0);
// return a new array with value [2, 4]
