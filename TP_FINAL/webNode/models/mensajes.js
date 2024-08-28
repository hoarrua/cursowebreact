var pool = require('../bd');
const moment = require('moment');



  async function altaMensajes(titulo,email,celular,mensaje,idPropiedad) {
    try {
        var query = 'INSERT INTO mensajes (titulo, email, celular, mensaje, idPropiedad, fechaAlta) VALUES ( ?, ?, ?, ?, ?, ?)';
        var fechaAlta = new Date(); // Fecha actual para `fechaAlta`
        var params = [
                        titulo,
                        email,
                        celular,
                        mensaje,
                        idPropiedad,
                        fechaAlta
                    ];
        await pool.query(query, params);
    } catch (error) {
        throw error;
    }
}




async function getMensajes() {
    try{
             // Crear hash MD5 de la contraseña
        var query = 'SELECT * FROM mensajes';
        var rows = await pool.query(query);
        // Formatear la fecha antes de devolver los resultados
        rows.forEach(mensaje => {
            mensaje.fechaAlta = moment(mensaje.fechaAlta).format('DD/MM/YYYY hh:mm:ss');
        });
        return rows; // Retorna todos los resultados
    } catch (error)
    {
        throw error;
    }
  }




module.exports = {
    altaMensajes,
    getMensajes
};
