// routes/admin.js
const express = require('express');
const router = express.Router();
const usuarioModel = require('../models/usuario');

router.get('/login', (req, res) => {
    res.render('admin/login', { title: 'Login' });
});

router.post('/login', async (req, res) => {
    const { usuario, password } = req.body;
    try {
        const user = await usuarioModel.getUserAndPassword(usuario, password);
        if (user) {
            res.render('layouts/layout', { title: 'Bienvenido', body: '<h1>¡Bienvenido!</h1>' });
        } else {
            res.send('Credenciales incorrectas');
        }
    } catch (error) {
        console.error('Error de autenticación:', error);
        res.status(500).send('Error de autenticación');
    }
});

module.exports = router;