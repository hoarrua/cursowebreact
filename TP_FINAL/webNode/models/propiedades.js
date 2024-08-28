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


  async function altaPropiedades(titulo,tipo,tipoOperacion, precio,dimensiones,descripcion) {
    try {
        var query = 'INSERT INTO propiedades (titulo, tipo, tipoOperacion,precio, dimensiones, descripcion, usuario_id, estado,fechaalta) VALUES (?, ? , ?, ?, ?, ?, ?, ?,?)';
        var fechaAlta = new Date(); // Fecha actual para `fechaAlta`
        var params = [
            titulo,
            tipo,
            tipoOperacion,
            precio,
            dimensiones,
            descripcion,
            1,
            1,//el estado lo cargo en 1
            fechaAlta
        ];
        var rows =await pool.query(query, params);
        return rows; 
    } catch (error) {
        throw error;
    }
}

async function getPropiedadById(id) {
    try{
        var query = 'SELECT * FROM propiedades where id = ?';
        var rows = await pool.query(query,[id]);
      
        return rows[0];
    } catch (error)
    {
        throw error;
    }
  }





async function getPropiedades() {
    try{
        var query = 'SELECT * FROM propiedades where estado = 1';
        var rows = await pool.query(query);
 
        rows.forEach(propiedades => {
            propiedades.fechaAlta = moment(propiedades.fechaalta).format('DD/MM/YYYY hh:mm:ss');
        });
        return rows; // Retorna todos los resultados
    } catch (error)
    {
        throw error;
    }
  }



  async function getPropiedadesByTipoOperacion(tipoOperacion) {
    try{
        var query = 'SELECT * FROM propiedades where tipoOperacion = ?';
        var rows = await pool.query(query,[tipoOperacion]);
      
        rows.forEach(propiedades => {
            propiedades.fechaAlta = moment(propiedades.fechaalta).format('DD/MM/YYYY hh:mm:ss');
        });
        return rows;
    } catch (error)
    {
        throw error;
    }
  }


  async function getPropiedadesCompletas() {
    try{
        var query = 'SELECT p.id,upper(p.titulo) titulo, upper(p.tipo) AS tipo,  upper(p.tipoOperacion) AS tipoOperacion,p.precio, p.dimensiones, upper(p.descripcion) descripcion, c.cuit, c.apellido, c.nombre, p.fechaalta '+
                    'FROM propiedades p, propiedades_imagenes PI, asociacion a, cliente c '+
                    'WHERE p.id=PI.propiedad_id '+
                    'AND p.estado = 1 '+
                    'AND p.id = a.idPropiedad '+
                    'AND a.idCliente = c.id';
        var rows = await pool.query(query);
 
        rows.forEach(propiedades => {
            propiedades.fechaAlta = moment(propiedades.fechaalta).format('DD/MM/YYYY hh:mm:ss');
        });
        return rows; // Retorna todos los resultados
    } catch (error)
    {
        throw error;
    }
  }


  


module.exports = {
    altaPropiedades,
    getPropiedades,
    getPropiedadById,
    getPropiedadesCompletas,
    getPropiedadesByTipoOperacion
};
