const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const contactsSchema = new Schema({
  'name': String,
  'email': String,
  'phone': String,
});

contactsSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('Contacts', contactsSchema);