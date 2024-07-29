// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRoutes = require('./routes/admin');

app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/admin', adminRoutes);



module.exports = app;







/** 
var pool = require('./bd');
const crypto = require('crypto');

pool.query('select * from usuarios', (err,rows) => {
  if (err){
            console.error('Error al realizar la consulta: ',err);
            return;
  }

  console.log('USUARIOS ENCONTRADOS');
  rows.forEach(row => {
    console.log(`${row.id} - ${row.nombre} - ${row.correo}`); 
  });

});


function insertarUsuario(nombre, email, rol, user, pass, activo) {

  const hashedPassword = crypto.createHash('md5').update(pass).digest('hex');

  const query = 'INSERT INTO usuarios (nombre, email, rol, user, pass, activo) VALUES (?, ?, ?, ?, ?, ?)';
  const values = [nombre, email, rol, user, hashedPassword, activo];

  pool.query(query, values, (err, results) => {
    if (err) {
      console.error('Error al insertar usuario:', err);
      return;
    }
    console.log('Usuario insertado con ID:', results.insertId);
  });
}

insertarUsuario('Hugo Arrua', 'hoarrua@example.com', 'administrador', 'admin', 'a1', 1);

*/