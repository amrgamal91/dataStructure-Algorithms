/**
 * A map is a data structure that stores data in key / value pairs where every key is unique.
 *  A map is sometimes called an associative array or dictionary.
 * It is often used for fast look-ups of data. Maps allow the following things:
        the addition of a pair to the collection
        the removal of a pair from the collection
        the modification of an existing pair
        the lookup of a value associated with a particular key
 */
/*********** Maps */
class myMap {
  constructor() {
    this.collection = {};
    this.count = 0;
  }
  size() {
    return this.count;
  }
  set(key, value) {
    this.collection[key] = value;
    this.count++;
  }
  has(key) {
    return key in this.collection;
  }
  get(key) {
    return key in this.collection ? this.collection[key] : null;
  }
  delete(key) {
    if (key in this.collection) {
      delete this.collection[key];
      this.count--;
    }
  }
  values() {
    let result = new Array();
    for (let key of Object.keys(this.collection)) {
      result.push(this.collection[key]);
    }
    return result.length > 0 ? result : null;
  }

  clear() {
    this.collection = {};
    this.count = 0;
  }
}

let map = new myMap();
map.set("arms", 2);
map.set("fingers", 10);
map.set("eyes", 2);
map.set("belley button", 1);

console.log(map.get("fingers"));
console.log(map.size());
console.log(map.values());

let map2 = new Map();
map2.has("hands");
map2.entries();

let keyObj = {},
  keyFunc = function() {};

map2.set("hello", "string value");
map2.set(keyObj, "obj value");
map2.set(keyFunc, "func value");
map2.set(NaN, "NaN value");

console.log(map2.size);

console.log(map2.get("hello"));
console.log(map2.get(keyObj));
console.log(map2.get(keyFunc));
console.log(map2.get(NaN));
