var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('Acerca de nosotros: Somos una empresa dedicada a...');
});

module.exports = router;
