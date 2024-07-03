
const express = require('express');
const app = express();
const port = 3001;

// Definir la ruta con el parámetro 'name'
app.get('/saludar/:name', (req, res) => {
  const name = req.params.name;
  res.send(`Hola, ${name}!`);
});

// Definir la ruta con el parámetro 'age'
app.get('/edad/:age', (req, res) => {
  const edad = req.params.age;
  if (edad < 18) {
    res.send(`Ud es joven!`);
  } else {
    res.send(`Ud es adulto!`);
  }
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

module.exports = app;


//http://localhost:3001/edad/17
//http://localhost:3001/saludar/Hugo
