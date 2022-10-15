/*
  file: login.js
  Atuhor: Tannus Esquerdo
  ID: #301288342
  Date: 2022-10-14
*/

var express = require('express');
const passport = require('passport');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Login', page_name: 'login' });
});

router.post('/', passport.authenticate('local', {
  successRedirect: '/dashboard/contacts',
  failureRedirect: '/login',
  failureFlash: true,
}), function(req, res) {
  console.log(req);
});

module.exports = router;
