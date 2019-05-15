/**
 * A hash table is a map data structure that contains key / value pairs.
 * It uses a hash function to compute an index into an array of buckets or slots,
 * from which the desired value can be found.
 *
 * The hash function usually takes a string as input and it outputs an numerical value.
 * The hash function should always give the same output number for the same input.
 * When two inputs hash to the same numerical output, this is called a collision. 
 * The goal is to have few collisions.
 *
 * So when you input a key / value pair into a hash table, the key is run through the hash
 * function and turned into a number. This numerical value is then used as the actual key
 * that the value is stored by.
 *
 * When you try to access the same key again,the hashing function will process the key and return the same numerical result.
 * The number will then be used to look up the associated value.
 * This provides very efficient O(1) lookup time on average.
 * 
        *   ╔═══════════╦═════════╦════════════╗
            ║ Algorithm ║ Average ║ Worst Case ║
            ╠═══════════╬═════════╬════════════╣
            ║ Space     ║ O(n)    ║ O(n)       ║
            ║ Search    ║ O(1)    ║ O(n)       ║
            ║ Insert    ║ O(1)    ║ O(n)       ║
            ║ Delete    ║ O(1)    ║ O(n)       ║
            ╚═══════════╩═════════╩════════════╝
    some helpful links : 
        https://www.youtube.com/watch?v=KyUTuwz_b7Q
        https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/
        https://medium.com/coderbyte/importance-of-hash-tables-c429a2b523b8
 */

/* Hash Table */

/**
 *
 * @param {value to generate hash code for it} string
 * @param {maximum hash code , hash code not exceed this value} max
 */
var hash = (string, max) => {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};

class HashTable {
  constructor() {
    let storage = [];
    const storageLimit = 14;
  }
  print() {
    console.log(storage);
  }

  /**
   *
   * @param {key of the inserted item} key
   * @param {value of the inserted item} value
   * - here closed addressing is implemented to avoid collision not open addressing , it means if 2 items get the same index then the second item will be pushed in the same index then index will contain multiple items
   * 1- get the hash index
   * 2- if the index is empty then add the key/value pair
   * 3- else (index is not empty) check for the key (may item exist then modify its value)
   * 4- if item not exist then push the key/value pair to this bucket
   */
  add(key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      storage[index] = [[key, value]];
    } else {
      /* modifying the value  */
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          storage[index][i][1] = value;
          inserted = true;
        }
      }
      /* pushing a new value to the bucket */
      if (inserted === false) {
        storage[index].push([key, value]);
      }
    }
  }

  /**
   *
   * @param {key value of item to be removed} key
   * 1- get the hash index
   * 2- if there is only one pair then delete it
   * 3- else , loop over the items in this bucket and delete the matched one
   */
  remove(key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key) {
      delete storage[index];
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          delete storage[index][i];
        }
      }
    }
  }

  /**
   *
   * @param {key of the item to look for} key
   * 1- get the hash index
   * 2- if no items in this index then return undefined
   * 3- else loop over the items in the bucket and get it
   */
  lookup(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined) {
      return undefined;
    } else {
      for (var i = 0; i < storage[index].length; i++) {
        if (storage[index][i][0] === key) {
          return storage[index][i][1];
        }
      }
    }
  }
}

console.log(hash("quincy", 10));

let ht = new HashTable();
ht.add("beau", "person");
ht.add("fido", "dog");
ht.add("rex", "dinosour");
ht.add("tux", "penguin");
console.log(ht.lookup("tux"));
ht.print();
