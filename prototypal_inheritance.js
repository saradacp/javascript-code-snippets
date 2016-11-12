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