var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


app.get('/', (req, res) => {
  res.send('¡Bienvenido a mi aplicación Express!');
});

// Ruta para una página de contacto
app.get('/contacto', (req, res) => {
  res.send('Página de contacto: Contáctanos al correo contacto@example.com');
});

// Ruta para una página de about
app.get('/about', (req, res) => {
  res.send('Acerca de nosotros: Somos una empresa dedicada a...');
});

app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});




module.exports = app;
