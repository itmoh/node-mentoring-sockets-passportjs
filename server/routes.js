/**
 * Main application routes
 */

'use strict';

var api = require('./api');
var passport = require('passport');
module.exports = function(app) {

  // Insert routes below
  app.use('/api', api);
  app.post('/login', passport.authenticate('local', { successRedirect: '/',
    failureRedirect: '/login' }));

};
