// Hoisting is a process of pushing the declared variables to the top of the program while running it. For Ex:

doSomething(foo); // used before
var foo; // declared later

// When you do above thing in a scripting language like Python, it throws an error.
//  You need to first define and use it. Even though JS is a scripting language, it has a mechanism of hoisting.
// In this mechanism, a JavaScript VM does two things while running a program:
// First scan the program, collect all the variable and function declarations and assign memory spaces for it.
// Run the program now by filling variable values assigned any, if not, fill undefined
// In the above code snippet, console.log prints “undefined”. It is because in the first pass variable foo is collected.
//  VM looks for any value defined for variable foo. This hoisting can result in many JavaScript code situations
//  where code can throw errors in some places and uses undefined silently in another.

// https://developer.mozilla.org/en-US/docs/Glossary/Hoisting
// One of the advantages of JavaScript putting function declarations into memory before it executes any code
//  segment is that it allows you to use a function before you declare it in your code. For example:

//===========================================================
function catName(name) {
  console.log("My cat's name is " + name);
}

catName("Tigger");

/*
  The result of the code above is: "My cat's name is Tigger"
  */
//===========================================================
catName("Chloe");

function catName(name) {
  console.log("My cat's name is " + name);
}
/*
 The result of the code above is: "My cat's name is Chloe"
 */

// JavaScript only hoists declarations, not initializations.
// If a variable is declared and initialized after using it, the value will be undefined. For example:
console.log(num); // Returns undefined
var num;
num = 6;
// If you declare the variable after it is used, but initialize it beforehand, it will return the value:
num = 6;
console.log(num); // returns 6
var num;

//===========================================================
// The below two examples demonstrate the same behavior.

var x = 1; // Initialize x
console.log(x + " " + y); // '1 undefined'
var y = 2; // Initialize y

// The above example is implicitly understood as this:
var x; // Declare x
var y; // Declare y
// End of the hoisting.

x = 1; // Initialize x
console.log(x + " " + y); // '1 undefined'
y = 2; // Initialize y
