const express = require('express');
const router = express.Router();
const usuarioModel = require('../models/usuario');
const clientes = require('../models/clientes');
const propiedades = require('../models/propiedades');
const asociacion = require('../models/asociacion');
const propiedadesImagenes = require('../models/propiedades_imagenes');



// Ruta para cargar el módulo de Clientes
router.get('/clientes', async (req, res, next) => {
    let result = await clientes.getClientes();
    res.json(result);
});



module.exports = router;