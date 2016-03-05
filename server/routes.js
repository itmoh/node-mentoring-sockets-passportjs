/**
 * Main application routes
 */

'use strict';

var path = require('path');

module.exports = function (app) {

    // Insert routes below
    app.use('/api', require('./api'));

    app.use('/auth', require('./auth'));

    app.get('/login', function (req, res) {
        res.render('login', {});
    })
    app.get('/*', function (req, res) {
        res.render('index', {});
    });

};
