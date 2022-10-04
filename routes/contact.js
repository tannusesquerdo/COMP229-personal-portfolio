/*
  file: contact.js
  Atuhor: Tannus Esquerdo
  ID: #301288342
  Date: 2022-10-03
*/

var express = require('express');
var router = express.Router();

/* GET contact page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact', page_name: 'contact' });
});

module.exports = router;
