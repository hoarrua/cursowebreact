var pool = require('../bd');
const crypto = require('crypto');
const moment = require('moment');


async function getClientes() {
    try{
             // Crear hash MD5 de la contraseña
        var query = 'SELECT * FROM cliente where estado = 1';
        var rows = await pool.query(query);
        // Formatear la fecha antes de devolver los resultados
        rows.forEach(cliente => {
            cliente.fechaNac = moment(cliente.fechaNac).format('DD/MM/YYYY hh:mm:ss');
            cliente.fechaAlta = moment(cliente.fechaAlta).format('DD/MM/YYYY hh:mm:ss');
        });
        return rows; // Retorna todos los resultados
    } catch (error)
    {
        throw error;
    }
  }


  
async function getClienteById(id) {
    try{
      
        var query = 'SELECT * FROM cliente where id=?';
        var rows = await pool.query(query,[id]);
      
        return rows[0];
    } catch (error)
    {
        throw error;
    }
  }


  async function getClienteByCuitorId(cuit,id) {
    try{
      
        var query = 'SELECT id, apellido, nombre, cuit  FROM cliente where cuit = ? OR id = ?';
        var row = await pool.query(query,[cuit,id]);
      
        return row[0];
    } catch (error)
    {
        throw error;
    }
  }

  async function updateClienteById(obj, id) {
    try{
           
        var query = 'update cliente set ? where id=?';
        var rows = await pool.query(query,[obj,id]);
        return rows; 
    } catch (error)
    {
        throw error;
    }
  }

  async function deleteClienteById(obj, id) {
    try{
           
        var query = 'update cliente set ? where id=?';
        var rows = await pool.query(query,[obj,id]);
        return rows; 
    } catch (error)
    {
        throw error;
    }
  }


  async function altaCliente(cliente) {
    try {
        var query = 'INSERT INTO cliente (cuit, apellido, nombre, fechaNac, sexo, email, codAreaCel, numCel, fechaAlta, estado) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?,?)';
        var fechaAlta = new Date(); // Fecha actual para `fechaAlta`
        var params = [
            cliente.cuit,
            cliente.apellido,
            cliente.nombre,
            cliente.fechaNac,
            cliente.sexo,
            cliente.email,
            cliente.codAreaCel,
            cliente.numCel,
            fechaAlta,
            1//el estado lo cargo en 1
        ];
        await pool.query(query, params);
    } catch (error) {
        throw error;
    }
}




  module.exports = {
    getClientes,
    altaCliente,
    getClienteById,
    updateClienteById,
    deleteClienteById,
    getClienteByCuitorId
};
