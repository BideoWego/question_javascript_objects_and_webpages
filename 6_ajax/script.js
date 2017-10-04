var Person = {
  all: function() {
    return fetch('/people.json')
      .then(function(response) {
        return response.json();
      });
  }
};


$(function() {
  Person.all()
    .then(function(people) {
      var $people = $('#people');
      people.forEach(function(person) {
        var $link = $('<a href="#">').text(person.name);
        $link.click(function(e) {
          e.preventDefault();
          var greeting = `Hello world! My name is ${ person.name } and I'm ${ person.age } years old.`;
          alert(greeting);
          return false;
        });
        var $person = $('<li>').addClass('list-group-item');
        $person.append($link);
        $people.append($person);
      });
    })
    .catch(function(error) {
      console.error(error);
    });
});


