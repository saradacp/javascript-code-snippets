/**
Reflection - An object can look at itself, listing and changing its properties and methods

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

for (var prop in john ) { // loop over every member in the object
  console.log("existing and inherited=>  "+ prop+ " : " + john[prop]);
  if(john.hasOwnProperty(prop)) { // checks if it's exists on john property
    console.log("existing in john object =>" + prop+ " : " + john[prop]); // reflect on john's properties
  }
}

/** extend : 
extends an object functionality with provided object's  properties
**/

var jane = {
  address: "111 Main St",
  getFormalFullName: function() {
    return this.firstname+ "," + this.lastname;
  }
}
var jim = {
  getFirstName: function() {
    return firstname;
  }
}
_.extend(john, jane, jim); // need to have source of underscore.js uses reflection to copy 
//the properties and method of the provided object
console.log(john); // john gets all the properties of jane and jim 


