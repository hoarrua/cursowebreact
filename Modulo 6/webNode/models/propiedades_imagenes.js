var pool = require('../bd');
const moment = require('moment');



  async function altaPropiedadesImagenes(propiedad_id, imagen_url) {
    try {
        var query = 'INSERT INTO propiedades_imagenes (propiedad_id, imagen_url) VALUES ( ?, ?)';
        var fechaAlta = new Date(); // Fecha actual para `fechaAlta`
        var params = [
            propiedad_id,
            imagen_url
        ];
        await pool.query(query, params);
    } catch (error) {
        throw error;
    }
}



module.exports = {
    altaPropiedadesImagenes
};
