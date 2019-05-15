/* Stacks! */
/**
 * A stack is a basic data structure where you can only insert or delete items at the top
 * of the stack. It is kind of similar to a stack of books. If you want to look at a book in the middle 
 * of the stack you must take all of the books above it off first.
   The stack is considered LIFO (Last In First Out) — meaning the last item you put in the 
   stack is the first item that comes out of the stack
    ╔═══════════╦═════════╦════════════╗
    ║ Algorithm ║ Average ║ Worst Case ║
    ╠═══════════╬═════════╬════════════╣
    ║ Space     ║ O(n)    ║ O(n)       ║
    ║ Search    ║ O(n)    ║ O(n)       ║
    ║ Insert    ║ O(1)    ║ O(1)       ║
    ║ Delete    ║ O(1)    ║ O(1)       ║
    ╚═══════════╩═════════╩════════════╝
 */

// functions: push, pop, peek, length

class Stack {
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  // Adds a value onto the end of the stack
  push(value) {
    this.storage[this.count] = value;
    this.count++;
  }
  // Removes and returns the value at the end of the stack
  pop() {
    if (this.count === 0) {
      return undefined;
    }
    this.count--;
    var result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }
  size() {
    return this.count;
  }
  // Returns the value at the end of the stack
  peek() {
    return this.storage[this.count - 1];
  }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("freeCodeCamp");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
