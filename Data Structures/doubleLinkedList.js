class Node {
  constructor(data, prev) {
    this.data = data;
    this.prev = prev;
    this.next = null;
  }
}
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(element) {
    var node = new Node(element);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
  }
  remove(element) {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === element) {
        if (currentNode == this.head && currentNode == this.tail) {
          this.head = null;
          this.tail = null;
        } else if (currentNode == this.head) {
          this.head = currentNode.next;
          this.head.prev = null;
        } else if (currentNode == this.tail) {
          this.tail = currentNode.prev;
          this.tail.next = null;
        } else {
          currentNode.prev.next = currentNode.next;
          currentNode.next.prev = currentNode.prev;
        }
      }
      currentNode = currentNode.next;
    }
  }
  display() {
    var currentNode = this.head;
    while (currentNode) {
      console.log(currentNode.data + "  ");
      currentNode = currentNode.next;
    }
  }

  reverse() {
    let current = this.head;
    let prev = null;
    while (current) {
      let next = current.next;
      current.next = prev;
      current.prev = next;
      prev = current;
      current = next;
    }
    this.tail = this.head;
    this.head = prev;
  }

  swap(nodeOne, nodeTwo) {
    if (nodeOne > nodeTwo) {
      var temp = nodeTwo;
      nodeTwo = nodeOne;
      nodeOne = temp;
    }
    var current = this.head;
    var counter = 0;
    var firstNode;
    while (current) {
      if (counter == nodeOne) {
        firstNode = current;
      } else if (counter == nodeTwo) {
        var temp = current.data;
        current.data = firstNode.data;
        firstNode.data = temp;
      }
      current = current.next;
      counter++;
    }
  }
}
var conga = new DoublyLinkedList();
conga.add("kitten");
conga.add("Puppy");

////
var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.add = function(element) {
      var node = new Node(element);
      if (!this.head) {
        this.head = node;
        this.tail = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
    };
    this.remove = function(element) {
      var currentNode = this.head;
      while (currentNode) {
        if (currentNode.data === element) {
          if (currentNode == this.head && currentNode == this.tail) {
            this.head = null;
            this.tail = null;
          } else if (currentNode == this.head) {
            this.head = currentNode.next;
            this.head.prev = null;
          } else if (currentNode == this.tail) {
            this.tail = currentNode.prev;
            this.tail.next = null;
          } else {
            currentNode.prev.next = currentNode.next;
            currentNode.next.prev = currentNode.prev;
          }
          currentNode = currentNode.next;
        }
      }
    };
  }
}
