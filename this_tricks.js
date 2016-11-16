var person = {
  name: "Sarada",
  printName: function() {
    console.log("name= ",this.name);
  }
};
person.printName(); //Sarada
var o2 = person.printName;
o2(); // name = empty string o2 is called with window context
o2.call(person); //name = Sarada  o2 is called with person context
var o3 = o2.bind(person);
o3();// name = Sarada
