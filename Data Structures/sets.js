/**
 *  The set data structure stores values without any particular order and with no repeated values. 
 *  Besides being able to add and remove elements to a set, 
 *  there are a few other important set functions that work with two sets at once.
 * 
    Union : This combines all the items from two different sets and returns this as a new set (with no duplicates).
    Intersection : Given two sets, this function returns another set that has all items that are part of both sets.
    Difference : This returns a list of items that are in one set but NOT in a different set.
    Subset : This returns a boolean value that shows if all the elements in one set are included in a different set.
 */

/* Sets */
class mySet {
  constructor() {
    // the collection array will hold the set
    this.collection = [];
  }

  /**
   * this method will check for the presence of an element and return true or false
   */
  has = function(element) {
    return this.collection.indexOf(element) !== -1;
  };

  /**
   * this method will return all the values in the set
   */
  values = function() {
    return this.collection;
  };

  /**
   * this method will add an element to the set
   */
  add = function(element) {
    if (!this.has(element)) {
      this.collection.push(element);
      return true;
    }
    return false;
  };

  /**
   * this method will remove an element from a set
   */
  remove = function(element) {
    if (this.has(element)) {
      index = this.collection.indexOf(element);
      this.collection.splice(index, 1); //removes starting from index , one item
      return true;
    }
    return false;
  };

  /**
   * this method will return the size of the collection
   */
  size = function() {
    return this.collection.length;
  };

  /**
   * this method will return the union of two sets
   */
  union = function(otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      unionSet.add(e);
    });
    secondSet.forEach(function(e) {
      unionSet.add(e);
    });
    return unionSet;
  };

  /**
   * this method will return the intersection of two sets as a new set
   */
  intersection = function(otherSet) {
    var intersectionSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e) {
      if (otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  };

  /**
   * this method will return the difference of two sets as a new set
   */
  difference = function(otherSet) {
    var differenceSet = new mySet();
    var firstSet = this.values();
    firstSet.forEach(function(e) {
      if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  };

  /**
   * this method will test if the set is a subset of a different set
   */
  subset = function(otherSet) {
    var firstSet = this.values();
    return firstSet.every(function(e) {
      otherSet.has(e);
    });
  };
}

//********** test sets  ************* */
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());

var setC = new Set();
var setD = new Set();
setC.add("a");
setD.add("b");
setD.add("c");
setD.add("a");
setD.add("d");
console.log(setD.values());
setD.delete("a");
console.log(setD.has("a"));
console.log(setD.add("d"));

//in es6
var set = new Set([1, 2, 3, 1, 2, 3]);
// set contains [1, 2, 3] only
