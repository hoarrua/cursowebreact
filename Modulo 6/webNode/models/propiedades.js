var pool = require('../bd');
const moment = require('moment');


/** 
async function getClientes() {
    try{
        var query = 'SELECT * FROM cliente where estado = 1';
        var rows = await pool.query(query);
        rows.forEach(cliente => {
            cliente.fechaNac = moment(cliente.fechaNac).format('DD/MM/YYYY hh:mm:ss');
            cliente.fechaAlta = moment(cliente.fechaAlta).format('DD/MM/YYYY hh:mm:ss');
        });
        return rows; 
    } catch (error)
    {
        throw error;
    }
  }
    **/


  async function altaPropiedades(titulo,tipo,precio,dimensiones,descripcion) {
    try {
        var query = 'INSERT INTO propiedades (titulo, tipo, precio, dimensiones, descripcion, usuario_id, estado) VALUES (?, ?, ?, ?, ?, ?, ?)';
        var fechaAlta = new Date(); // Fecha actual para `fechaAlta`
        var params = [
            titulo,
            tipo,
            precio,
            dimensiones,
            descripcion,
            1,
            1//el estado lo cargo en 1
        ];
        var rows =await pool.query(query, params);
        return rows; 
    } catch (error) {
        throw error;
    }
}


module.exports = {
    altaPropiedades
};
