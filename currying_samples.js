/**
currying is a way of constructing functions that allows partial application of a function’s arguments. What this means is that you can pass all of the arguments a function is expecting and get the result, or pass a subset of those arguments and get a function back that’s waiting for the rest of the arguments.


**/

function add(a, b){
    if (arguments.length  === 2) {
        return a+b;
    }else {
        return function(b){
            return a+b;
        }
    }
    
    
}
console.log(add(2,5)); //7
console.log(add(2)(5)); //7

/**
Another sample
**/

var greetCurried = function(greeting) {
  return function(name) {
    console.log(greeting + ", " + name);
  };
};
var greetHello = greetCurried("Hello");
greetHello("Heidi"); //"Hello, Heidi"
greetHello("Eddie"); //"Hello, Eddie"
greetCurried("Hi there")("Howard"); //"Hi there, Howard"

/**
Multiple 

**/
const f = a => b => c => a + b + c;
const result = f(1)(2)(3);
console.log(result);

/** currying actual implementation */
function curryIt(uncurriedFn) {
  var parameters = Array.prototype.slice.call(arguments, 1);  // Omit 0th argument (which is the uncurriedFn and start from index 1)
  return function () {
    return uncurriedFn.apply(this, parameters.concat(
      Array.prototype.slice.call(arguments, 0)
    ));
  };
}

/** interesting example **/
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");

const f = a => b => c => a.addEventListener(b, (event) => {
  event.target.style.backgroundColor = c;
});
const oneEventColor = f(one);
const twoEventColor = f(two);
oneEventColor('mouseover')('green');
twoEventColor('mouseout')('red');

