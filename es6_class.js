class Person {

  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  greet() {
    return "Hi" + this.firstname;
   }
}
var john = new Person("John", "Doe");
console.log(john.greet()); // Hi John

// Inheritance

class InformalPerson extends Person { // extends sets prototype __proto__
  constructor(first, last) {
    super(first, last);
  }
  greet() { // override greet
    return "Yo"+ this.firstname;
  }
}
var informal = new InformalPerson("Mike","Smith");
console.log(informal.greet()); // YoMike