const express = require('express');
const router = express.Router();
const usuarioModel = require('../models/usuario');
const clientes = require('../models/clientes');
const propiedades = require('../models/propiedades');
const asociacion = require('../models/asociacion');
const propiedadesImagenes = require('../models/propiedades_imagenes');
const mensajes = require('../models/mensajes');


// Ruta para cargar el módulo de Clientes
router.get('/clientes', async (req, res, next) => {
    let result = await clientes.getClientes();
    res.json(result);
});



// Ruta para cargar el módulo de Propiedades
router.get('/propiedades', async (req, res, next) => {
    let result = await propiedades.getPropiedades();
    res.json(result);
});


// Ruta para cargar el módulo de Mensajes
router.get('/mensajes', async (req, res, next) => {
    let result = await mensajes.getMensajes();
    res.json(result);
});


// Ruta para cargar el módulo de Propiedades
router.post('/mensaje', async (req, res, next) => {
    try {
        console.log("llamo al servicio Mensaje",req.body);
         const { titulo, email, celular, mensaje, idPropiedad } = req.body;

        await mensajes.altaMensajes(titulo,email,celular,mensaje,idPropiedad);

        res.status(200).json({ message: 'Consulta recibida y procesada exitosamente' });
    } catch (error) {
        console.error("Error procesando la consulta:", error);
        // Responder con error
        res.status(500).json({ message: 'Error al procesar la consulta', error: error.message });
    }
});



// Ruta para cargar el módulo de propiedadesImagenes
router.get('/propiedadesImagenes', async (req, res, next) => {
    try {
       
        // Consulta SQL para obtener la propiedad y sus imágenes
        var listaPropiedades = await propiedades.getPropiedades();
        

           // Usar Promise.all para esperar a que todas las promesas se resuelvan
           const propiedadesConImagenes = await Promise.all(listaPropiedades.map(async (propiedad) => {
            // Obtener las imágenes para cada propiedad
            const imagenes = await propiedadesImagenes.getPropiedadesImagenesByIdPropiedad(propiedad.id);
            // Añadir las imágenes a la propiedad
            propiedad.imagenes = imagenes;
            return propiedad;
        }));
          
        // Retornar la propiedad completa con las imágenes
        res.json(listaPropiedades);
        
    } catch (error) {
        console.error('Error al obtener la propiedad y sus imágenes:', error);
        res.status(500).json({ error: 'Error al obtener la propiedad y sus imágenes' });
    }
});


// Ruta para cargar el módulo de Propiedades por ID
router.get('/propiedadesImagenes/:propiedad_id', async (req, res, next) => {
    try {
        const { propiedad_id } = req.params;

        // Consulta SQL para obtener la propiedad y sus imágenes
        const propiedad = await propiedades.getPropiedadById(propiedad_id);
        const imagenes = await propiedadesImagenes.getPropiedadesImagenesByIdPropiedad(propiedad_id);

        if (propiedad) {
            // Añadir las imágenes a la propiedad
            propiedad.imagenes = imagenes;

            // Retornar la propiedad completa con las imágenes
            res.json(propiedad);
        } else {
            res.status(404).json({ error: 'Propiedad no encontrada' });
        }
    } catch (error) {
        console.error('Error al obtener la propiedad y sus imágenes:', error);
        res.status(500).json({ error: 'Error al obtener la propiedad y sus imágenes' });
    }
});




// Ruta para cargar el módulo de Propiedades completo filtrador por tipoOperacion
router.get('/propiedades/:tipoOperacion', async (req, res, next) => {
    try {
        const { tipoOperacion } = req.params;

        // Consulta SQL para obtener la propiedad y sus imágenes
        const listaPropiedades = await propiedades.getPropiedadesByTipoOperacion(tipoOperacion);
   
        

           // Usar Promise.all para esperar a que todas las promesas se resuelvan
           const propiedadesConImagenes = await Promise.all(listaPropiedades.map(async (propiedad) => {
            // Obtener las imágenes para cada propiedad
            const imagenes = await propiedadesImagenes.getPropiedadesImagenesByIdPropiedad(propiedad.id);
            // Añadir las imágenes a la propiedad
            propiedad.imagenes = imagenes;
            return propiedad;
        }));
          
        // Retornar la propiedad completa con las imágenes
        res.json(listaPropiedades);

    } catch (error) {
        console.error('Error al obtener la propiedad y sus imágenes:', error);
        res.status(500).json({ error: 'Error al obtener la propiedad y sus imágenes' });
    }
});



module.exports = router;