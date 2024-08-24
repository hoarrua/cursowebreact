// routes/admin.js
const express = require('express');
const router = express.Router();
const path = require('path');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' }); // Configura el destino temporal


const usuarioModel = require('../models/usuario');
const clientes = require('../models/clientes');
const propiedades = require('../models/propiedades');
const asociacion = require('../models/asociacion');
const propiedadesImagenes = require('../models/propiedades_imagenes');

var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);




router.get('/login', (req, res) => {
    res.render('admin/login', { layout: 'loginLayout' }); // Especificar el layout para login
});

  
router.post('/login', async (req, res) => {
    const { usuario, password } = req.body;
    try {
        const user = await usuarioModel.getUserAndPassword(usuario, password);
        if (user) {
            res.render('admin/dashboard', { pagina: 'Dashboard' });
            //res.render('layouts/layout',{body:'HOLA',pagina:'Dashboard'});
           // res.render('admin/bienvenida', { title: 'Bienvenido' }); // Renderizar vista de bienvenida con layout por defecto
        } else {
            res.send('Credenciales incorrectas');
        }
    } catch (error) {
        console.error('Error de autenticación:', error);
        res.status(500).send('Error de autenticación');
    }
});

// Ruta para el módulo de Dashboard
router.get('/dashboard', (req, res) => {
    //res.render('admin/dashboard', {pagina:'Dashboard'});
    if (req.xhr) {
        res.render('admin/dashboard', { layout: false, pagina: 'Dashboard' });
    } else {
        res.render('admin/dashboard', { pagina: 'Dashboard' });
    }
});


router.post('/propiedades', async (req, res) => {
    // Lógica para manejar el POST a /admin/propiedades si es necesario
    console.log("entro por /admin/propiedades");
    res.send('Propiedad guardada correctamente'); // Respuesta de ejemplo
});

// Ruta para el módulo de Propiedades
router.get('/propiedades', (req, res) => {
    if (req.xhr) {
        res.render('admin/propiedades', { layout: false, pagina: 'Propiedades' });
    } else {
        res.render('admin/propiedades', { pagina: 'Propiedades' });
    }
        //res.render('admin/propiedades', { pagina: 'Propiedades' });
});

// Ruta para cargar el módulo de Clientes
router.get('/clientes', async (req, res) => {
    try {
        const results = await clientes.getClientes();
        if (req.xhr) {
            res.render('admin/clientes', { layout: false, clientes: results, pagina: 'Clientes' });
        } else {
            res.render('admin/clientes', { clientes: results, pagina: 'Clientes' });
        }
    } catch (error) {
        console.error('Error al cargar clientes:', error);
        res.status(500).send('Error al cargar clientes');
    }
});

// Ruta para manejar el alta de clientes
router.post('/cliente/alta', async (req, res) => {
    try {
        console.log('Ruta /cliente Alta:::',req.body);
        await clientes.altaCliente(req.body);
        res.redirect('/admin/clientes'); // Redirige a la página de clientes después de insertar
    } catch (error) {
        console.error('Error al dar de alta al cliente:', error);
        res.status(500).send('Error al dar de alta al cliente');
    }
});


// Ruta para mostrar el formulario de modificación
router.get('/cliente/modificar/:id', async (req, res) => {
    try {
        const cliente = await clientes.getClienteById(req.params.id);
        res.render('admin/modificarCliente', { cliente: cliente, pagina: 'Modificar Cliente' });
    } catch (error) {
        console.error('Error al obtener el cliente:', error);
        res.status(500).send('Error al obtener el cliente');
    }
});

// Ruta para manejar la modificación de cliente
router.post('/cliente/modificar/:id', async (req, res) => {
    try {
        console.log("cliente/modificar:id",req.params.id );
        console.log("cliente/modificar:body",req.body );
        await clientes.updateClienteById(req.body, req.params.id);
        res.redirect('/admin/clientes');
    } catch (error) {
        console.error('Error al modificar el cliente:', error);
        res.status(500).send('Error al modificar el cliente');
    }
});




// Ruta para eliminar un cliente
router.get('/cliente/eliminar/:id', async (req, res) => {
    try {
        await clientes.deleteClienteById({ estado: 0 }, req.params.id);
        res.render('admin/clientes', {
            clientes: await clientes.getClientes(),
            pagina: 'Clientes',
            successMsg: 'Cliente eliminado correctamente'
        });
    } catch (error) {
        console.error('Error al eliminar el cliente:', error);
        res.status(500).send('Error al eliminar el cliente');
    }
});




// Ruta para mostrar la página de propiedades
router.get('/propiedades', async (req, res) => {
    const cliente = await clientes.getClienteById(req.params.id);
    //const clientes = await db.query('SELECT id, cuit FROM cliente');
    res.render('admin/propiedades', { cliente });
});


// Ruta para buscar cliente por CUIT o ID
router.post('/buscar-cliente', async (req, res) => {
    console.log("estoy en buscar-cliente: ",req.body);
    const { cuit, id } = req.body;

    try {
        const cliente = await clientes.getClienteByCuitorId(cuit,id);

        if (cliente) {
            console.log("Cliente encontrado:", cliente); // Depuración
            // res.render('admin/propiedades', { cliente, pagina: 'Registrar Propiedad' }); 
            res.json(cliente); // Retorna los datos del cliente como JSON

        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error en el servidor' });
    }
});

// Ruta para guardar la propiedad
router.post('/propiedades/guardar', upload.array('imagenes[]', 10), async (req, res) => {
    console.log("ESTOY EN GUARDAR PROPIEDAD");
    console.log("Datos recibidos en /propiedades/guardar:", req.body);
    console.log("Archivos recibidos:", req.files);

    const { titulo, tipo, precio, dimensiones, descripcion, cliente_id, tipo_asociacion, imagenes } = req.body;
    console.log('CLIENTE_ID(init): ', cliente_id)
    // Guardar propiedad
    console.log('Ruta /propiedades/guardar (PROPIEDAD):::',req.body);
    const result= await propiedades.altaPropiedades(titulo, tipo, precio, dimensiones, descripcion);
   
    console.log('ID PROPIEDAD: '+result.insertId);
    console.log('CLIENTE_ID: ', cliente_id)

    const propiedad_id = result.insertId;

    // Guardar asociación cliente-propiedad
    //await db.query('INSERT INTO asociacion (idCliente, idPropiedad, tipo, fechaAlta) VALUES (?, ?, ?, NOW())', [cliente_id, propiedad_id, tipo_asociacion]);
    await asociacion.altaAsociacion(cliente_id,propiedad_id);



    
   // Guardar imágenes
   var img_id = '';
   if (req.files) {
            const imagenes = Array.isArray(req.files.imagenes) ? req.files.imagenes : [req.files.imagenes];
            for (const imagen of imagenes) {
                const tempFilePath = imagen.tempFilePath;

                // Obtener extensión y añadirla si falta
                const extension = path.extname(imagen.name) || '.jpg';
                const tempFilePathWithExt = tempFilePath + extension;
                fs.renameSync(tempFilePath, tempFilePathWithExt);
                console.log("Archivo renombrado a:", tempFilePathWithExt);

                const result = await uploader(tempFilePathWithExt);
                console.log("Resultado de la subida:", result);

                //const img_id = (await uploader(tempFilePathWithExt)).public_id;
                const img_id = result.public_id;
                console.log("IMAGEN ID: ", img_id);
                await propiedadesImagenes.altaPropiedadesImagenes(propiedad_id, img_id);
            }
    }
    res.redirect('/admin/propiedades');
});


// Prueba manual de la función de subida
router.post('/prueba-subida', async (req, res) => {
    console.log("Archivos recibidos:", req.files);
    if (req.files ) {
        console.log("ENTRO POR ACA");
        const imagen = req.files.imagenes;

         // Verificar el archivo temporal
         const tempFilePath = imagen.tempFilePath;
         console.log("Ruta temporal del archivo:", tempFilePath);


        try {
            // Leer el archivo temporal para verificar su existencia
            if (fs.existsSync(tempFilePath)) {
                console.log("El archivo temporal existe");

                // Obtener extensión y añadirla si falta
                const extension = path.extname(imagen.name) || '.jpg';
                const tempFilePathWithExt = tempFilePath + extension;
                fs.renameSync(tempFilePath, tempFilePathWithExt);
                console.log("Archivo renombrado a:", tempFilePathWithExt);

                // Subir el archivo a Cloudinary
                const result = await uploader(tempFilePathWithExt);
                console.log("Resultado de la subida:", result);
                res.send('Subida exitosa');
            } else {
                console.error("El archivo temporal no existe");
                res.status(500).send('Error al encontrar el archivo temporal');
            }
        } catch (error) {
            console.error("Error al subir la imagen:", error);
            res.status(500).send('Error al subir la imagen');
        }
    } else {
        res.status(400).send('No se recibió ninguna imagen');
    }
});


module.exports = router;