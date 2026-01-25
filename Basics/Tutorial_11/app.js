// Express
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/about', (req, res) => {
  res.send('About Page');
});

app.get('/example', (req, res) => {
  res.send('Example Page');
});


app.get('/example/:name/:age', (req, res) => {
  const name = req.params.name;
  const age = req.params.age;
  res.send(`Hello ${name}, you are ${age} years old.`);
});

app.listen(3000);