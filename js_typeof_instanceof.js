var a = 3;
console.log(typeof a); // number

var b = "Hello";
console.log(typeof b); //string

var c = {};
console.log(typeof c); //object

var d = []; 
console.log(typeof d); // object
console.log(Object.prototype.toString.call(d)); // [object array]


function Person(name)  {
  this.name = name;
}

var p = new Person("John");

console.log(typeof p); // object
console.log(p instanceof Person); // true

console.log(typeof undefined); //undefined
console.log(typeof null); // object -- bug in js 

var z = function() {}
console.log(typeof z); //function