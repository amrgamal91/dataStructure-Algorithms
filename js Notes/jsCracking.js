///////////////////////*********************************************************************************/////////////
/** ====================================================================================================================
/** ============================================= bind() call() Apply() ===========================================================
 * Use .bind() when you want that function to later be called with a certain context, useful in events.
 * Use .call() or .apply() when you want to invoke the function immediately, with modification of the context.
 *
 * Suppose your maths teacher asked you to create a library and submit it. You wrote an abstract library which finds area and circumference of the circle.
 *
 */
var mathLib = {
  pi: 3.14,
  area: function(r) {
    return this.pi * r * r;
  },
  circumference: function(r) {
    return 2 * this.pi * r;
  }
};
/*
 * While submitting second code samples, you found in guidelines that professor asked you to use constant pi with 5 decimals precision.
 * Oh gosh! You just used 3.14, not 3.14159. Now you have no chance to send library as the deadline was over. JS call function saves you. Just call your code in this way
 * */
mathLib.area.call({ pi: 3.14159 }, 2);

/**
 * Which makes your professor happy! If you observe the call function takes two arguments:
    Context
    Function arguments
   A context is an object that replaces this keyword inside the area function. Later arguments are passed as function arguments. For Ex:
 */

var cylinder = {
  pi: 3.14,
  volume: function(r, h) {
    return this.pi * r * r * h;
  }
};
cylinder.volume.call({ pi: 3.14159 }, 2, 6);
//75.39815999999999

/**
 * Apply is exactly same except Function arguments are passed as a list for god’s sake.
 */
cylinder.volume.apply({ pi: 3.14159 }, [2, 6]);
//75.39815999999999;

//===============================================

/**
 *  Bind attaches a brand new this to a given function. In bind’s case,
 *  the function is not executed instantly like Call or Apply.
 *  What is the use of Bind? It allows us to inject a context into a function which returns a new function with updated context.
 *  It means this variable will be user supplied variable. This is very useful while working with JavaScript events.
 */
var newVolume = cylinder.volume.bind({ pi: 3.14159 }); // This is not instant call
// After some long time, somewhere in the wild
newVolume(2, 6); // Now pi is 3.14159

///////////////////////*********************************************************************************/////////////
/** ====================================================================================================================
/** ============================================= Closures  ===========================================================
/**
 * There are three kinds of scopes:
    Global scope
    Local Scope/Function scope
    Block scope(Introduced in ES6)

 */

//global scope
x = 10;
function Foo() {
  console.log(x); // Prints 10
}
Foo();

//function Scope
pi = 3.14;
function circumference(radius) {
  pi = 3.14159;
  console.log(2 * pi * radius); // Prints "12.56636" not "12.56"
}
circumference(2);

//ES16 standard had introduced new block scope which limits a variable’s scope to a given parenthesis block.
var a = 10;

function Foo() {
  if (true) {
    let a = 4;
  }

  alert(a); // alerts '10' because the 'let' keyword
}
Foo();
//Functions & conditions are considered as blocks. Above example should alert 4 because conditional statements are executed. But ES6 destroys scope of block variables and scope went into global.

// If someone asks you this question. Write a design that takes a string and returns a character at a time. If the new string is given, it should replace old one. It is simply called a generator.
function generator(input) {
  var index = 0;
  return {
    next: function() {
      if (index < input.length) {
        index += 1;
        return input[index - 1];
      }
      return "";
    }
  };
}
var mygenerator = generator("boomerang");
mygenerator.next(); // returns "b"
mygenerator.next(); // returns "o"
mygenerator = generator("toon");
mygenerator.next(); // returns "t"

//Here, the scope is playing an important role. A closure is a function that returns another function and wraps data.
//The above string generator qualifies for a closure. The index value is preserved between multiple function calls.
//The internal function defined can access the variables defined in the parent function.
// This is a different scope. If you defined one more function in the second level function, that can access all parent’s variables.

///////////////////////*********************************************************************************/////////////
/** ====================================================================================================================
/** ============================================= this keyword  ===========================================================

/**
 * In JavaScript, we always compose code with functions and objects. If you take browser, in the global context it refers to the window object.
 * I mean this will evaluate to true if you open browser console right now and enter this. 
 * */
this === window;

/*
    When the context and scope of program changes, this at that particular point changes accordingly.
    Now see this in a local context is: 
 */
function Foo() {
  console.log(this.a);
}
var food = { a: "Magical this" };
Foo.call(food); // food is this

function Foo() {
  console.log(this); // prints {}?
}
/*
Nope, it won’t. Because this is a global object here. Remember, whatever parent scope is, it will be inherited by the child. So it prints window object. The three methods we discussed are actually used to set this object.
Now comes the last type of this. this in object scope. Here */
var person = {
  name: "Stranger",
  age: 24,
  get identity() {
    return { who: this.name, howOld: this.age };
  }
};
person.identity; // returns {who: "Stranger", howOld: 24}

///////////////////////*********************************************************************************/////////////
/** ====================================================================================================================
/** ============================================= Objects (freeze , Seal)  ===========================================================**/
var marks = { physics: 98, maths: 95, chemistry: 91 };
/**
 * It is a map that stores Key, Value pairs. JavaScripts objects have a special property of storing anything as a value.
 *  It means we can store a list, another object, a function etc as a value. What not?
 * You can create an object in these ways:
 */
var marks = {};
var marks = new Object();

/**You can easily convert a given object into a JSON string and also reverse it back using JSON object’s stringify and parse methods respectively. */
// returns "{"physics":98,"maths":95,"chemistry":91}"
JSON.stringify(marks);
// Get object from string
JSON.parse('{"physics":98,"maths":95,"chemistry":91}');

//So what are few things about objects you should know? Iterating over the object is easy, using Object.keys
var highScore = 0;
for (i of Object.keys(marks)) {
  if (marks[i] > highScore) highScore = marks[i];
}
/**
 * Object.values returns the list of values of an object.
   Other important functions on an object are:
   Object.prototype(object)
   Object.freeze(function)
   Object.seal(function)
   Object.prototype provides more important functions that have many applications. Some of them are:
   Object.prototype.hasOwnProperty is useful to find out whether a given property/key exists in an object */

marks.hasOwnProperty("physics"); // returns true
marks.hasOwnProperty("greek"); // returns false

/**
 * Object.prototype.instanceof evaluates whether a given object is the type of a particular prototype
 * (we will see them in the next section, they are functions). */
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
var newCar = new Car("Honda", "City", 2007);
console.log(newCar instanceof Car); // returns true

//Now comes the other two functions. Object.freeze allows us to freeze an object so that existing properties cannot be modified.
var marks = { physics: 98, maths: 95, chemistry: 91 };
finalizedMarks = Object.freeze(marks);
finalizedMarks["physics"] = 86; // throws error in strict mode
console.log(marks); // {physics: 98, maths: 95, chemistry: 91}

// Here we are trying to modify value of the physics property after freezing the object.
// But, JavaScript will not allow doing that. We can find whether a given object is frozen or not like this.
Object.isFrozen(finalizedMarks); // returns true

// Object.seal is slightly different from the freeze.
// It allows configurable properties but won’t allow new property addition or deletion or properties.
var marks = { physics: 98, maths: 95, chemistry: 91 };
Object.seal(marks);
delete marks.chemistry; // returns false as operation failed
marks.physics = 95; // Works!
marks.greek = 86; // Will not add a new property

//We can also check whether a given object is sealed using this
Object.isSealed(marks); // returns true

///////////////////////*********************************************************************************/////////////
/** ====================================================================================================================
/** ============================================= prototypical Inheritance  ===========================================================**/
// In traditional JavaScript, there is the concept of inheritance in a camouflage.
// It is by using a technique of prototyping. All the new class syntax you see in ES5, ES6 is just a syntactical sugar coating for the underlying prototypical OOP.
//Creating a class is done using a function in JavaScript.

var animalGroups = {
  MAMMAL: 1,
  REPTILE: 2,
  AMPHIBIAN: 3,
  INVERTEBRATE: 4
};

function Animal(name, type) {
  this.name = name;
  this.type = type;
}
var dog = new Animal("dog", animalGroups.MAMMAL);
var crocodile = new Animal("crocodile", animalGroups.REPTILE);

//Here we are creating objects for the class (using new keyword).
//We can add methods for a given class(function) like this. Attach a class method like this.
Animal.prototype.shout = function() {
  console.log(this.name + "is " + this.sound + "ing...");
};

// Here you may get a doubt. There is no sound property in the class. Yes! there is hardly a sound property defined.
// That is intended to be passed by the child classes who inherits above class.
// In JavaScript, inheritance is achieved like this.
function Dog(name, type) {
  Animal.call(this, name, type);
  this.sound = "bow";
}

// I defined one more specific function called Dog. Here, in order to inherit the Animal class,
// we need to perform call function(we discussed it earlier) with passing this and other arguments.
// We can instantiate a German Shepard like this
var pet = Dog("germanShepard", animalGroups.MAMMAL);
console.log(pet); // returns Dog {name: "germanShepard", type: 1, sound: "bow"}

/**
 * We are not assigning name and type in the child function, we are calling super function Animal and setting the respective properties.
 * The pet is having the properties(name, type) of the parent. But what about the methods.
 * Are they inherited too? Let us see! */

pet.shout(); // Throws error

// What? why did that happen? It happens because we didn’t say JavaScript to inherit the parent class methods.
// How to fix that? // Link prototype chains
Dog.prototype = Object.create(Animal.prototype);
var pet = new Dog("germanShepard", animalGroups.MAMMAL);
// Now shout method is available
pet.shout(); // germanShepard is bowing...

// Now shout method is available. We can check what is the class of given object in JavaScript using the object.constructor function.
// Let us check what is the class of our pet.
pet.constructor; // returns Animal
// It is vague. The Animal is a parent class. But what type exactly is the pet? It is a Dog type. This occurs because of the constructor of Dog class.
Dog.prototype.constructor; // returns Animal

//It is Animal. We should set it to Dog class itself so that all instances(objects) of the class should give correct class name where it belongs to.
Dog.prototype.constructor = Dog;
/*
    These four things you should remember about prototypical inheritance.
        - Class properties are bound using this
        - Class methods are bound using prototype object
        - To inherit properties, use call function passing this object
        - To inherit methods, use Object.create to link prototypes of parent and child
        - Always set child class constructor to itself for getting the right identity of its objects
    Note: These are things happens under the hood even with new class syntax. 
    Knowing these is valuable for your JS knowledge.
 */

///////////////////////*********************************************************************************/////////////
/** ====================================================================================================================
/** ============================================= callbacks & Promises  ===========================================================**/
// Callbacks are the functions those executed after an I/O operation is done. A time taking I/O operation can block
// the code not allowing further execution in Python/Ruby.
// But in JavaScript, due to the allowed asynchronous execution, we can provide callbacks to the async functions.
// The example is an AJAX(XMLHttpRequest) call from the browser to a server, events generated by the mouse. keyboard etc. Example is
function reqListener() {
  console.log(this.responseText);
}

var req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", "http://www.example.org/example.txt");
req.send();

// Here reqListener is the callback which will be executed when a GET request to is successfully responded back.
// Promises are neat wrappers for callbacks which allows us to asynchronous code elegantly.
// look for promise.js file
