/**
Inheritance: An object gets access to the properties and methods of another object.

classical vs prototypal
It's the way Java does - sharing the properties and methods through public/private
Prototypal inheritance (Java script) is simpler than classical and is extensible and easy to understand

All javascript objects have a property called proto which is an object. If we have to find a property in an object, 
the javascript engine first looks for it in the object, if not found,  it would look in the proto object. If found returns otherwise it 
checks in the object's prototype chain till it's found.
**/

var person = {

  firstname: 'Default',
  lastname: 'Default',
  getFullName: function() {
    return this.firstname + ' ' + this.lastname;
  }
}

var john = {
  firstname: 'John',
  lastname: "Doe"
}

// Demo purpose: You can directlt us the proto property directly but never do that since it affect's performance
john.__proto__= person;
console.log(john.getFullName()); // getFullName is not defined in john but acquires through proto
// o/p:  John Doe - this refers to the invoked object

var jane = {
  firstname: 'Jane'
}

jane.__proto__= person;
console.log(jane.getFullName());
// o/p: Jane Default   since lastname is not defined in Jane, js engine looks for it in the prototype chain and returns default


/** Other ways to create object  --- function constructors - (starts with a first letter as a capital letter)
 When a function contructor is invoked with new operator, then 'this' variable points a new object and that object is returned from the function automatically
 **/
function Person(firstname, lastname) { /
  console.log(this); // Person empty onject Person{}
  this.firstanme = firstname;
  this.lastname = lastname;

}
var john = new Person("John", "Doe"); // new operator this the empty object to this
console.log(john);


// Important : The prototype of the function is not the proto peoperty of the object
//prototype is the property created for a function constructor which is invoked by a new operator

Person.prototype.getFullName = function() {
  return this.firstname + " "+ this.lastname;
}

/**
When declaring a function constructor, it is recommonded to keep the properties in the functions and attach  the methods 
to the prototype and it becomes avaialbe to all the objects it is assigned to. 
It also saves memory since all the invoked object doesnot need to contain the copy of the getFullname method
so, for efficient purpose put the method on prototype.
**/

// Note: if you forget to use "new" operator to invoke the function constructor , the code still executes but returns undefined

var jane = Person("Jane", "Smaith");
console.log(jane);// returns undefined

console.log(jane.getFullName()); // throws error since Jane is undefined


// Existing function constructors

var a = new Number(3);
console.log(a);
a.toFixed() // prototype method of Number. 
// Prototypal inheritance: a has access to all the prototype methods of Number(Number.prototype lists all it's methods)
// beware, do not override the existing method.


/**  Object creation using Object.create - pure prototypal inheritance **/


// Polyfill: Code that adds a feature which the engine may lack

// if older browsers does not support object.create then we can create a pollfill to accomodate this feature

if(!Object.create) { // polyfill
  Object.create = function(o) {
    if(arguments.length > 1) {
      throw new Error("Object.create accepts a single parameter");
    }
    function F() {
      F.prototype = 0;
      return new F();
    };
  };
}

var person = {
  firstname: "Default",
  lastname: "Default",
  greet: function() {
    return "Hi" +this.firstname; // this is very important here
  }
}
var john = Object.create(person); // pure prototypal inheritance but older browser doesn't have this
john.firstname = "John"; // changes first name for john alone but proto object has default as firstname
john.lastname = "Doe";
console.log(john);



