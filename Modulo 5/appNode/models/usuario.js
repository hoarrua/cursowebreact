var pool = require('../bd');
const crypto = require('crypto');




async function getUserAndPassword(user, pass) {
    try{
             // Crear hash MD5 de la contraseña
        var md5Password = crypto.createHash('md5').update(pass).digest("hex");
        var query = 'SELECT * FROM usuarios WHERE user = ? AND pass = ?';
        var rows = await pool.query(query, [user, md5Password]);
            return rows[0]
    } catch (error)
    {
        throw error;
    }
  }


  module.exports = {getUserAndPassword}