var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Página de contacto: Contáctanos al correo contacto@example.com');
});

module.exports = router;
