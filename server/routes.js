/**
 * Main application routes
 */

'use strict';

var api = require('./api');
var passport = require('passport');
var express = require('express');
var config = require('./config/environment');
var User = require('./api/user/user.model');

require('./auth/local')(User);

passport.serializeUser(function(user, done) {
    var userId = user._id.toString()
  done(null, userId);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function(err, user) {
    done(err, user);
  });
});

var router = express.Router();

module.exports = function(app) {

  // Insert routes below
  app.use('/api', api);
  app.post('/login', passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/login.html' }));
};
