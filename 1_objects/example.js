// Objects


var person = {
  name: 'George',
  age: 20,
  greet: function() {
    // return 'Hello world! My name is ' + this.name + '.';
    return `Hello world! My name is ${ this.name }.`;
  }
};


console.log(person);
console.log(person.name, person.age);
console.log(person.greet());





