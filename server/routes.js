/**
 * Main application routes
 */

'use strict';

var path = require('path');
var auth = require('./auth/auth.service');

module.exports = function (app) {

    // Insert routes below
    app.use('/api', require('./api'));

    app.use('/auth', require('./auth'));

    app.get('/login', function (req, res) {
        res.render('login', {});
    });

    app.get('/poker', auth.isAuthenticated(), function (req, res) {
        res.render('poker', {});
    })

    app.get('/*', function (req, res) {
        res.render('index', {});
    });

};
