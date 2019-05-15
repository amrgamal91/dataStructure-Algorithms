/**
 * *************** Array vs LinkedList *************
 * 1- fixed size ....vs..... Dynamic size
 * 2- inefficient insertion & deletion  ....vs.... Efficient insertion & deletion
 * 3- Random access ex: a[10]  ....vs.... no random access
 * 4- may result much memory waste ...vs...  no waste of memory
 * 5- squential access is faster (elements in contiguous memory locations) ...vs... sequential access is slow (elements not in contiguous memory locations)
 *      ╔═══════════╦═════════╦════════════╗
        ║ Algorithm ║ Average ║ Worst Case ║
        ╠═══════════╬═════════╬════════════╣
        ║ Space     ║ O(n)    ║ O(n)       ║
        ║ Search    ║ O(n)    ║ O(n)       ║
        ║ Insert    ║ O(1)    ║ O(1)       ║
        ║ Delete    ║ O(1)    ║ O(1)       ║
        ╚═══════════╩═════════╩════════════╝
 */

/**
 * LinkedList consists of nodes
 * each node has value & pointer to next node
 */
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

/**
 * LinkedList
 */
class LinkedList {
  constructor() {
    this.length = 0;
    this.head = null;
  }

  size() {
    return this.length;
  }

  head() {
    return this.head;
  }

  add(element) {
    var node = new Node(element);
    if (this.head == null) {
      this.head = node;
    } else {
      var currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
  }

  remove(element) {
    var currentNode = this.head;
    var perviousNode;
    if (currentNode.value === element) {
      this.head = currentNode.next;
    } else {
      while (currentNode.value !== element) {
        perviousNode = currentNode;
        currentNode = currentNode.next;
      }
      perviousNode.next = currentNode.next;
    }
    this.length--;
  }

  isEmpty() {
    return this.length === 0;
  }

  indexOf(element) {
    var currentNode = this.head;
    var index = -1;
    while (currentNode) {
      index++;
      if (currentNode.value === element) {
        return index;
      } else {
        currentNode = currentNode.next;
      }
    }
    return -1;
  }

  elementAt(index) {
    var counter = 0;
    if (index < 0) return -1;
    var currentNode = this.head;
    while (index > counter && currentNode !== null) {
      counter++;
      currentNode = currentNode.next;
    }
    return currentNode.value;
  }

  addAt(index, element) {
    var node = new Node(element);
    var currentNode = this.head;
    var previousNode;
    var counter = 0;
    if (index == 0) {
      node.next = currentNode;
      this.head = node;
    } else {
      while (counter < index) {
        counter++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      node.next = currentNode;
      previousNode.next = node;
    }
    this.length++;
  }

  removeAt(index) {
    var currentNode = this.head;
    var previousNode;
    var currentIndex = 0;
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      head = currentNode.next;
    } else {
      while (currentIndex < index) {
        currentIndex++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
    this.length--;
    return currentNode.element;
  }

  /**
   * problem : find middle element by only one pass without using size
   */
  findMiddle() {
    var first = this.head;
    var second = this.head;

    while (second.next && second.next.next) {
      first = first.next;
      second = second.next.next;
    }
    return first;
  }

  /**
   * fast pointer move by 2 steps & slow pointer moves by one step
   * linked list is cyclic if both fast and slow pointers meet
   */
  isCyclic() {
    let slow = this.head;
    let fast = this.head;
    while (fast != null && fast.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    if (slow == fast) return true;
    else return false;
  }

  /**
   * reverse the linked list
   */
  reverse() {
    let previousNode = null;
    let currentNode = this.head;
    let tmp;
    while (currentNode) {
      tmp = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = tmp;
    }
    return previousNode;
  }

  /**
   *
   * @param {the nth element} n
   * get the nth element from the end of the list
   */
  getNthNode(n) {
    let first = this.head;
    let second = this.head;
    let index = 1;
    while (second.next) {
      second = second.next;
      index++;
      if (index > n) {
        first = first.next;
      }
    }
    return first.value;
  }

  /**
   * traverse the nodes of the list
   */
  display() {
    let current = this.head;
    while (current.next) {
      console.log(cuurent);
      current = current.next;
    }
  }
}

var conga = new LinkedList();
conga.add("Kitten");
conga.add("Puppy");
conga.add("Dog");
conga.add("Cat");
conga.add("Fish");
conga.add("lion");
conga.add("crocodile");
conga.display();
console.log(conga.reverse());
console.log(conga.findMiddle());
console.log(conga.size());
console.log(conga.addAt(3, "horse"));
console.log(conga.elementAt(3));
console.log(conga.indexOf("Puppy"));
console.log(conga.size());

/**
 * Implement preceding value in a LinkedList —
 * This function receives a value and returns the preceding value in the link list.
 */

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
  setNext(node) {
    this.next(node);
  }
}
class LinkedList {
  constructor(node) {
    this.first = node;
    this.curr = node;
  }
  getFirst() {
    return this.first;
  }
  insert(node) {
    this.curr.next = node;
    this.curr = this.curr.next;
  }
  precedingValue(val) {
    if (this.first) {
      return this._precedingValueInternal(this.first, null, val);
    }
  }
  _precedingValueInternal(curr, prevVal, requiredVal) {
    if (curr.value == requiredVal) {
      return prevVal;
    } else if (curr.next) {
      return this._precedingValueInternal(curr.next, curr.value, requiredVal);
    } else {
      return -1;
    }
  }
}
