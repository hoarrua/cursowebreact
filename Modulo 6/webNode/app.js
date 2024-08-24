// app.js
const express = require('express');
const { engine } = require('express-handlebars');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./routes/admin');
const path = require('path');
var fileUpload = require('express-fileupload');
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
// Configuración de la carpeta de archivos estáticos
app.use(fileUpload({useTempFiles: true,
  tempFileDir: '/tmp/'
}))
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views'); // Directorio de vistas
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/api',cors(), apiRouter);


app.use('/admin', adminRoutes);



module.exports = app;

