/** https://medium.com/dev-bits/writing-neat-asynchronous-node-js-code-with-promises-32ed3a4fd098
 *
 * A Promise is a proxy for a value not necessarily known when the promise is created.
 * It allows you to associate handlers to an asynchronous action's eventual success value or failure reason.
 * This lets asynchronous methods return values like synchronous methods:
 *  instead of the final value, the asynchronous method returns a promise for the value at some point in the future
 *
 * In simple words “A promise is a word taken for some action, the other party who gave the promise might fulfill it or deny it”.
 * In the case of fulfilling, the promise gets resolved, and in another case, it gets rejected.
 *
 *  We can create a promise in JavaScript and use it as an upcoming fact to describe few actions.
 *  Promises are kind of design patterns to remove the usage of unintuitive callbacks.
 * 
 * A promise can be created in our JavaScript code. Or else it can be returned from an external node package
   Any promise that performs async operations should call any one of the two methods resolve or reject. 
   The code logic should take care of when and where to call these functions.

   If the operation is successful, pass that data to the code that uses that promise, otherwise pass error
   The code which uses a promise should call then function on that promise. 

   It takes two anonymous functions as parameters:
         The first function executes if the promise is resolved and
         the second function executes if promise is rejected.
 */

//creating a promise :
var myPromise = new Promise(function(resolve, reject) {
  // ....
});

//example :
var userDetails;

function initialize() {
  // Setting URL and headers for request
  var options = {
    url: "https://api.github.com/users/narenaryan",
    headers: {
      "User-Agent": "request"
    }
  };

  // Return new promise
  return new Promise(function(resolve, reject) {
    // Do async job
    request.get(options, function(err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}
// initialize function is returning a promise instead of setting data or returning data. We need to take that promise and handle it in such a way that we can fill the variable and proceed our program from there.
// options object is used to set URL and Headers for request
// request.get makes a GET request to the Github API
// body consists of the JSON response from the server
// We are calling resolve method to pass data back to the handler which implements then on the promise.
// Now let us create a main function where we get the Promise for above function and attach a function callback in the then function.

var request = require("request");
var userDetails;

function initialize() {
  // Setting URL and headers for request
  var options = {
    url: "https://api.github.com/users/narenaryan",
    headers: {
      "User-Agent": "request"
    }
  };
  // Return new promise
  return new Promise(function(resolve, reject) {
    // Do async job
    request.get(options, function(err, resp, body) {
      if (err) {
        reject(err);
      } else {
        resolve(JSON.parse(body));
      }
    });
  });
}

function main() {
  var initializePromise = initialize();
  initializePromise.then(
    function(result) {
      userDetails = result;
      console.log("Initialized user details");
      // Use user details from here
      console.log(userDetails);
    },
    function(err) {
      console.log(err);
    }
  );
}

main();

//Suppose you want to perform an operation after a promise is fulfilled use another then method to transform the data you obtained from the promise.
// I need to return gists + repos count of narenaryan on github. Then I can simply add one more then like this
function main() {
  var initializePromise = initialize();
  initializePromise
    .then(
      function(result) {
        userDetails = result;
        console.log("Initialized user details");
        // Use user details from here
        return userDetails;
      },
      function(err) {
        console.log(err);
      }
    )
    .then(function(result) {
      // Print the code activity. Prints 110
      console.log(result.public_gists + result.public_repos);
    });
}
// If you observe above we are returning anotherPromise, but in next then we are using data as normal data.
// The above code is making two HTTP requests to the Github API but finally receiving the correct data and printing it to the console.

/////////////////////==================> sequence  of promises :
// We can make a sequence of promises for doing things in a particular order.
// We can use Promise.all function which takes a list of promises in the given order and returns another promise
// which we can use a then method to conclude the logic
var message = "";

promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    message += "my";
    resolve(message);
  }, 2000);
});

promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    message += " first";
    resolve(message);
  }, 2000);
});

promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    message += " promise";
    resolve(message);
  }, 2000);
});

var printResult = results => {
  console.log("Results = ", results, "message = ", message);
};

function main() {
  // See the order of promises. Final result will be according to it
  Promise.all([promise1, promise2, promise3]).then(printResult);
  Promise.all([promise2, promise1, promise3]).then(printResult);
  Promise.all([promise3, promise2, promise1]).then(printResult);
  console.log('""' + message);
}

main();

// setTimeout is used to simulate a blocking async operation. We are creating three promises and appending a string
// to the original variable called message. We should use Promise.all when we don’t care about the order of execution
// but finally message should be filled with the expected content.

// Note: Promise.all fails if any one of the Promise got rejected. It is an and operation between promise fulfillments

////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////// according to GeeksforGeeks /////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Promises are used to handle asynchronous operations in JavaScript.
// They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell
// leading to unmanageable code.

// Prior to promises events and callback functions were used but they had limited functionalities and created unmanageable code.
// Multiple callback functions would create callback hell that leads to unmanageable code.
// Events were not good at handling asynchronous operations.

// Promises are the ideal choice for handling asynchronous operations in the simplest manner.
// They can handle multiple asynchronous operations easily and provide better error handling than callbacks and events.

// Benefits of Promises
//     Improves Code Readability
//     Better handling of asynchronous operations
//     Better flow of control definition in asynchronous logic
//     Better Error Handling

// A Promise has four states:
//      fulfilled: Action related to the promise succeeded
//      rejected: Action related to the promise failed
//      pending: Promise is still pending i.e not fulfilled or rejected yet
//      settled: Promise has fulfilled or rejected

var promise = new Promise(function(resolve, reject) {
  //do something
});

// ======================== Parameters
// Promise constructor takes only one argument,a callback function.
// Callback function takes two arguments, resolve and reject
// Perform operations inside the callback function and if everything went well then call resolve.
// If desired operations do not go well then call reject.

var promise = new Promise(function(resolve, reject) {
  const x = "geeksforgeeks";
  const y = "geeksforgeeks";
  if (x === y) {
    resolve();
  } else {
    reject();
  }
});

promise
  .then(function() {
    console.log("Success, You are a GEEK");
  })
  .catch(function() {
    console.log("Some error has occured");
  });

//   Promise Consumers
// Promises can be consumed by registering functions using .then and .catch methods.

// 1- then()
// then() is invoked when a promise is either resolved or rejected.

// Parameters:
// then() method takes two functions as parameters.
// First function is executed if promise is resolved and a result is received.
// Second function is executed if promise is rejected and an error is received. (It is optional and there is a better way to hanlde error using .catch() method
.then(function(result){
    //handle success
}, function(error){
    //handle error
})

// Example: Promise Resolved
var promise = new Promise(function(resolve, reject) { 
    resolve('Geeks For Geeks'); 
}) 
  
promise 
    .then(function(successMessage) { 
       //success handler function is invoked 
        console.log(successMessage); 
    }, function(errorMessage) { 
        console.log(errorMessage); 
    })

// Examples: Promise Rejected
var promise = new Promise(function(resolve, reject) { 
    reject('Promise Rejected') 
}) 
  
promise 
    .then(function(successMessage) { 
        console.log(successMessage); 
    }, function(errorMessage) { 
       //error handler function is invoked 
        console.log(errorMessage); 
    }) 

//    2- catch()
// catch() is invoked when a promise is either rejected or some error has occured in execution.
// Parameters: 
//  catch() method takes one function as parameter.
//  Function to handle errors or promise rejections.(.catch() method internally calls .then(null, errorHandler), i.e. .catch() is just a shorthand for .then(null, errorHandler) )
.catch(function(error){
    //handle error
})

var promise = new Promise(function(resolve, reject) { 
    reject('Promise Rejected') 
}) 
  
promise 
    .then(function(successMessage) { 
        console.log(successMessage); 
    }) 
    .catch(function(errorMessage) { 
       //error handler function is invoked 
        console.log(errorMessage); 
    }); 

//Examples: Promise Rejected
var promise = new Promise(function(resolve, reject) { 
    throw new Error('Some error has occured') 
}) 
  
promise 
    .then(function(successMessage) { 
        console.log(successMessage); 
    }) 
    .catch(function(errorMessage) { 
       //error handler function is invoked 
        console.log(errorMessage); 
    }); 



//     Promise.all() and Promise.race()
// The .all() method evaluates all Promises and executes the .then() method when all the Promises within its Promise array have finished.
// The .race() method, on the other hand, executes as soon as any one Promise from the Promise array has completed execution. The .race() method does not wait for the other Promises and resolves as soon as any one of the Promises is resolved.
// The following example shows the syntax and output of each of these conditions.

// .all() example
var requestComplete = true;
promise1 = new Promise((resolve, reject) => {
  if (requestComplete)
    resolve("data received from 1");
})
promise2 = new Promise((resolve, reject) => {
  if (requestComplete)
    resolve("data received from 2");
})
promise3 = new Promise((resolve, reject) => {
  
  setTimeout(()=>{
  resolve("data received from 3");
  }, 2000);
})
Promise.all([promise1, promise2, promise3]).then( (message) => {
  console.log(message);
})

// When you run this code, the Promise waits for all the Promises within the promise array to complete. Since the promise3 has a delay of 2 seconds, no output is shown for 2 seconds.
// Only after the 2 seconds, once all of the Promises resolve, does the console.log output the message.
// In this case, the message is an array that contains the messages from all of the three promises:
            // 0:”data received from 1"
            // 1:”data received from 2"
            // 2:”data received from 3"
            // length:3

// The following code shows the syntax and structure of the .race() method:
// .race() example
var requestComplete = true;
promise1 = new Promise((resolve, reject) => {
  if (requestComplete)
    resolve("data received from 1");
})
promise2 = new Promise((resolve, reject) => {
  if (requestComplete)
    resolve("data received from 2");
})
promise3 = new Promise((resolve, reject) => {
  setTimeout(()=>{resolve("data received from 3");}, 2000);
})
Promise.race([promise1, promise2, promise3]).then( (message) => {
  console.log(message);
})

// When the .race() example is run, the console.log outputs immediately.
// It does not wait for the promise3 to finish execution.
// It executes the .then() function as soon as any one of the Promises resolves.
// In this case, the message is not an array but instead contains as its argument the arguments of the first Promise resolved — it contains only a single string in this case
                // data received from 1

//////////////////////////////////////////////////////////////////////////////////////////////// 
//                      A Real World example using Promises
////////////////////////////////////////////////////////////////////////////////////////////////
// Okay awesome! I think we are now ready for some real world implementations of Promises.
// We will use Promises to asynchronously fetch data from two different websites. We will use the built-in XMLHttpRequest() object for this and monitor the request.onreadystatechange() method to watch for responses using request.status and request.response.
// The first site we are accessing is the NASA API, and the second site is using the Github API. I simply chose these APIs since they were open key.
// We will use the Promise.race() method to see which of the two sites responds faster.

promise1 = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    let url = "https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo";
    request.open('GET', url);
    request.send();
    console.log("NASA " + request.readyState);
    request.onreadystatechange = () => {
      console.log("NASA " + request.readyState);
  if (request.readyState === 4) {
        //console.log(request.response);
        console.log("Response from NASA API: " + request.status);
        resolve("NASA wins the race!");
      }
    }
  })

promise2 = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    let url = 'https://api.github.com/users/mralexgray/repos';
    request.open('GET', url);
    request.send();
    console.log("GITHUB " + request.readyState);
    request.onreadystatechange = () => {
      console.log("GITHUB " + request.readyState);
  if (request.readyState === 4) {
        //console.log(request.response);
        console.log("Response from GITHUB API: " + request.status);
        resolve("GITHUB wins the race!");
      }
    }
  })
  Promise.race([promise1, promise2]).then((message) => {
    console.log(message);
  })