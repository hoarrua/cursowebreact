var pool = require('../bd');
const moment = require('moment');



  async function altaAsociacion(idCliente,idPropiedad) {
    try {
        var query = 'INSERT INTO asociacion (idCliente, idPropiedad, fechaAlta) VALUES ( ?, ?, ?)';
        var fechaAlta = new Date(); // Fecha actual para `fechaAlta`
        var params = [
                        idCliente,
                        idPropiedad,
                        fechaAlta
                    ];
        await pool.query(query, params);
    } catch (error) {
        throw error;
    }
}




module.exports = {
    altaAsociacion
};
