/**
Closure: A closure is a function defined within another scope that has access to all the variables within the outer scope.

Closures are functions that refer to independent (free) variables. In other words, the function defined in the closure ‘remembers’ the environment in which it was created.
Note: Free variables are variables that are neither locally declared nor passed as parameter.
**/
function myModule() {
  var name = "tim", age = 28;
  return function greet() {
    return "Hello " + name + ".  Wow, you are " + age + " years old.";
  }
}
// call `myModule` to get a closure out of it.
var greeter = myModule();
// Call the closure
greeter()

/**
Another sample
 call a function that generates another function or group of functions but hides all the state in private variables within the closure
**/
function greeter(name, age) {
  var message = name + ", who is " + age + " years old, says hi!";

  return function greet() {
    console.log(message);
  };
}

// Generate the closure
var bobGreeter = greeter("Bob", 47);

// Use the closure
bobGreeter();

/**
Simple counter
**/
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();
add();

// the counter is now 3
