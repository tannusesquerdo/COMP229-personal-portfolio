/*
  file: contact.js
  Atuhor: Tannus Esquerdo
  ID: #301288342
  Date: 2022-10-14
*/

var express = require('express');
var router = express.Router();
var {ensureAuthenticated} = require('../config/auth');

const Contacts = require('../models/contactsModel');


/* GET contacts page. */
router.get('/contacts', ensureAuthenticated, async (req, res, next) => {
  const contacts_list = await Contacts.find().all();
  res.render('dashboard/contacts', { title: 'Business Contacts', page_name: 'contacts', contacts_list });
});

router.get('/contacts/new', (req, res, next) => {
  res.render('dashboard/new', {title: 'Add New Contact'});
})

router.post('/contacts/new', (req, res) => {
  Contacts.insertMany(req.body)
    .then(result => {
      res.redirect('/dashboard/contacts');
    })
    .catch(error => console.log(error));
})

router.get('/contacts/edit/:id', async (req, res, next) => {
  const { id } = req.params;
  const data = await Contacts.findById(id);
  console.log(data);
  res.render('dashboard/edit', { title: 'Edit Contact', data });
})

router.put('/contacts/edit/:id', (req, res) => {
  const { id } = req.params;
  Contacts.findByIdAndUpdate(id, req.body, (err, docs) => {
    if (err) {
      console.log(err)
    } else {
      res.json('Success');
    }
  });
})

router.delete('/contacts/:id', (req, res) => {
  const { id } = req.params;
  Contacts.findByIdAndDelete(id)
    .then(result => {
      res.json({message: 'Contact Deleted'})
    })
    .catch(error => console.error(error))
})

module.exports = router;
