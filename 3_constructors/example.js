// Constructors


function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return `Hello world! My name is ${ this.name }.`;
  };
}


var person = new Person('George', 20);
console.log(person);
console.log(person.name, person.age);
console.log(person.greet());




// A constructor under the hood:
// Creates a new blank object to work with
// Immediately runs the constructor function on that object (so the new object is now set to this)
// Returns the original object (regardless of what your function was supposed to return)

// To mimic this...
function UnderTheHood(a, b) {
  this.a = a;
  this.b = b;
  return this;
}


var instance = UnderTheHood.call({}, 1, 2);
console.log(instance);


// And because the return value is ignored, we can...
var instance = new UnderTheHood(1, 2);
console.log(instance);





