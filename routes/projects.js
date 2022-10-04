/*
  file: projects.js
  Atuhor: Tannus Esquerdo
  ID: #301288342
  Date: 2022-10-03
*/

var express = require('express');
var router = express.Router();

/* GET projects page. */
router.get('/', function(req, res, next) {
  res.render('projects', { title: 'Projects', page_name: 'projects' });
});

module.exports = router;
