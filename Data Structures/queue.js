/**
 * A queue is considered FIFO (First In First Out) to demonstrate the way it accesses data.
 * This means that once a new element is added, all elements that were added before have to
 * be removed before the new element can be removed.
   A queue has just two main operations: enqueue and dequeue. Enqueue means to insert an item
   into the back of the queue and dequeue means removing the front item
    ╔═══════════╦═════════╦════════════╗
    ║ Algorithm ║ Average ║ Worst Case ║
    ╠═══════════╬═════════╬════════════╣
    ║ Space     ║ O(n)    ║ O(n)       ║
    ║ Search    ║ O(n)    ║ O(n)       ║
    ║ Insert    ║ O(1)    ║ O(1)       ║
    ║ Delete    ║ O(1)    ║ O(1)       ║
    ╚═══════════╩═════════╩════════════╝
 */
//***************************** Queue  (Basic queue) ******************************* */
class Queue {
    constructor() {
      collection = [];
    }
    print() {
      console.log(collection);
    }
    enqueue(element) {
      collection.push(element);
    }
    dequeue() {
      return collection.shift();
    }
    front() {
      return collection[0];
    }
    size() {
      return collection.length;
    }
    isEmpty() {
      return collection.length === 0;
    }
  }
  //***** test queue */
  var q = new Queue();
  q.enqueue("a");
  q.enqueue("b");
  q.enqueue("c");
  q.print();
  q.dequeue();
  console.log(q.front());
  q.print();
  
  //***************************** PriorityQueue ******************************* */
  
  class PriorityQueue {
    constructor() {
      var collection = [];
    }
    printCollection() {
      console.log(collection);
    }
    enqueue(element) {
      if (this.isEmpty()) {
        collection.push(element);
      } else {
        var added = false;
        for (var i = 0; i < collection.length; i++) {
          if (element[1] < collection[i][1]) {
            //checking priorities
            //array.splice(index, howmany, item1, ....., itemX) ,from index i remove 0 items and put element
            collection.splice(i, 0, element);
            added = true;
            break;
          }
        }
        if (!added) {
          collection.push(element);
        }
      }
    }
  
    //shift return item & delete it
    //from the begining of the array unlike pop()
    dequeue() {
      var value = collection.shift();
      return value[0];
    }
  
    //get the item without deleting it
    front() {
      return collection[0];
    }
    size() {
      return collection.length;
    }
    isEmpty() {
      return collection.length === 0;
    }
  }
  //***** test  priority queue */
  var pq = new PriorityQueue();
  pq.enqueue(["Beau Carnes", 2]);
  pq.enqueue(["Quincy Larson", 3]);
  pq.enqueue(["Ewa Mitulska-Wójcik", 1]);
  pq.enqueue(["Briana Swift", 2]);
  pq.printCollection();
  pq.dequeue();
  console.log(pq.front());
  pq.printCollection();
  
  //***************************** CircularQueue ******************************* */
  https://learn.freecodecamp.org/coding-interview-prep/data-structures/create-a-circular-queue/
  
  class CircularQueue {
    constructor(size) {
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
  
      while (size > 0) {
        this.queue.push(null);
        size--;
      }
    }
  
    print() {
      return this.queue;
    }
  
    checkFull() {
      var count = 0;
      for (let i = 0; i <= this.max; i++) {
        if (this.queue[i] == null) {
          count++;
        }
      }
      if (count > 0) {
        return false;
      }
      return true;
    }
    checkEmpty() {
      var count = 0;
      for (let i = 0; i <= this.max; i++) {
        if (this.queue[i] == null) {
          count++;
        }
      }
      if (count == this.max + 1) {
        return true;
      }
      return false;
    }
  
    enqueue(item) {
      if (!this.checkFull() /*this.write <= this.max*/) {
        this.queue[this.write] = item;
        this.write = (this.write + 1) % (this.max + 1);
        return item;
      } else return null;
    }
  
    dequeue() {
      if (!this.checkEmpty()) {
        let val = this.queue[this.read];
        this.queue[this.read] = null;
        this.read = (this.read + 1) % (this.max + 1);
        return val;
      } else return null;
    }
  }
  