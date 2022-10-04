/*
  file: services.js
  Atuhor: Tannus Esquerdo
  ID: #301288342
  Date: 2022-10-03
*/

var express = require('express');
var router = express.Router();

/* GET services page. */
router.get('/', function(req, res, next) {
  res.render('services', { title: 'Services', page_name: 'services' });
});

module.exports = router;
