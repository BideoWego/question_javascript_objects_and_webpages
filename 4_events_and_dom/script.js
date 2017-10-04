// Objects

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.greet = function() {
    return `Hello world! My name is ${ this.name } and I'm ${ this.age } years old.`;
  };
}


var people = [
  new Person('George', 20),
  new Person('Georgia', 21)
];


// Behavior

$(function() {
  var $people = $('#people');
  people.forEach(function(person) {
    var $link = $('<a href="#">').text(person.name);
    $link.click(function(e) {
      e.preventDefault();
      var greeting = person.greet();
      alert(greeting);
      return false;
    });
    var $person = $('<li>').addClass('list-group-item');
    $person.append($link);
    $people.append($person);
  });
});






