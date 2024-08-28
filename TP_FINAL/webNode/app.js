// app.js
const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./routes/admin');
const path = require('path');
var cors = require('cors');
var apiRouter = require('./routes/api');





// Configurar Handlebars como motor de plantillas
app.engine('hbs', engine({
  extname: '.hbs',
  defaultLayout: 'layout',
  layoutsDir: __dirname + '/views/layouts/', // Directorio de layouts
  helpers: {
    eq: function (a, b) {
        return a === b;
    }
}
}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views'); // Directorio de vistas
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api',cors(), apiRouter);

// Logging the rejected field from multer error
app.use((error, req, res, next) => {
  const message = 'Este campo dio error => "${error.field}"'
  console.log('This is the rejected field ->', message);
  return res.status(500).send(message);
});
app.use('/admin', adminRoutes);



module.exports = app;

