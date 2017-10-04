// Objects


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}


const people = [
  new Person('George', 20),
  new Person('Georgia', 21)
];




// Express

const express = require('express');
const app = express();


const expressHandlebars = require('express-handlebars');
const handlebars = expressHandlebars.create({
  layoutsDir: 'views/',
  defaultLayout: 'layout'
});

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');


app.get('/', (req, res) => {
  res.render('index', { people });
});


const port = 3000;
const host = 'localhost';


app.listen(port, host, () => {
  console.log(`Listening: http://${ host }:${ port }\n`);
});



