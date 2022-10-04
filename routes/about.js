/*
  file: about.js
  Atuhor: Tannus Esquerdo
  ID: #301288342
  Date: 2022-10-03
*/

var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('about', { title: 'About Me', page_name: 'about' });
});

module.exports = router;
