//function statement

function greet(name) {
  console.log("Hello" +name);
}

greet("John");


//function expression
var greetFunc = function(name) {
  console.log("Hello" +name);
};
greetFunc("John");

// Immediately invoked function expression (IIFE)

var greeting = function(name) {
  return "Hello" +name;
}("John");
console.log(greeting);

//classical example of IIFE
(function(name) {
var greeting="Inside IIFE: Hello";
console.log(greeting + name);
}("John"));