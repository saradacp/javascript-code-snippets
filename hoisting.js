/**
variable hoisting
**/

console.log("before:", x) // before: undefined
x = 5; // Assign 5 to x
console.log("after:", x); // after: 5

var x; // Declare x // this declaration is hoisted to top


/**
Function hoisting
**/

printName(); 
function printName() { // this function name is hoisted to top. So, calling the function before it's definition is ok for function statement
  console.log("Sarada");
} 

//o/p: Sarada


printName(); 

var printName = function() { // This is function expression which gets executed when compiler sees this line, so calling it before returns error
  console.log("Sarada");
} 

//Uncaught SyntaxError: Unexpected identifier


