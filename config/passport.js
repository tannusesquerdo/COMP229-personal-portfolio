const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

const User = require('../models/userModel');

function passport(passport) {
  passport.use(
    new LocalStrategy({ usernameField: 'username' }, (username, password, done) => {
      // find user with supplied email
      User.findOne({
        username: username
      }).then(user => {
        //the fetched user  is not found
        if (!user) {
          return done(null, false, { message: 'The user email entered is not with our records' });
        }
  
        //use bcrypt to compare the passwords and validate
        bcrypt.compare(password, user.password, (error, isMatch) => {
          if (error) throw error;
          if (isMatch) {
            return done(null, user);
          } else {
            return done(null, false, { message: 'Password entered is incorrect.' });
          }
        });
      });
    })
  );
  
  passport.serializeUser( (user, done) => {
    done(null, user.id);
  });
  
  passport.deserializeUser( (id, done) => {
    User.findById(id, (error, user) => {
      done(error, user);
    });
  });
};

module.exports = passport