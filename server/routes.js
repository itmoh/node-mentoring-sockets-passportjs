/**
 * Main application routes
 */

'use strict';

var api = require('./api');
module.exports = function(app) {

  // Insert routes below
  app.use('/api', api);

};
