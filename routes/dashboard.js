/*
  file: contact.js
  Atuhor: Tannus Esquerdo
  ID: #301288342
  Date: 2022-10-14
*/

var express = require('express');
var router = express.Router();
var {ensureAuthenticated} = require('../config/auth');

/* GET contacts page. */
router.get('/contacts', ensureAuthenticated, function(req, res, next) {
  res.render('dashboard/contacts', { title: 'Business Contacts', page_name: 'contacts' });
});

module.exports = router;
