// ES6 Classes


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    return `Hello world! My name is ${ this.name }.`;
  }
}


class Male extends Person {
  constructor(name, age) {
    super(name, age);
    this.gender = 'Male';
  }
}


class Female extends Person {
  constructor(name, age) {
    super(name, age);
    this.gender = 'Female';
  }
}


var person = new Person('George', 20);
console.log(person);
console.log(person.name, person.age);
console.log(person.greet());


var george = new Male('George', 20);
console.log(george);
console.log(george.name, george.age, george.gender);
console.log(george.greet());


var georgia = new Female('Georgia', 20);
console.log(georgia);
console.log(georgia.name, georgia.age, georgia.gender);
console.log(georgia.greet());




