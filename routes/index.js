/*
  file: index.js
  Atuhor: Tannus Esquerdo
  ID: #301288342
  Date: 2022-10-03
*/

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', page_name: 'home' });
});

module.exports = router;
