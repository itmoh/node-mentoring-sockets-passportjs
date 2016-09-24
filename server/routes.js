/**
 * Main application routes
 */

'use strict';

var api = require('./api');
var express = require('express');
var config = require('./config/environment');
var User = require('./api/user/user.model');

require('./auth/local')(User);

module.exports = function(app) {

  // Insert routes below
    app.use('/api', api);
    app.use('/auth', require('./auth'));
    app.get('/login', function (req, res) {
        res.render('login', {});
    })
    app.get('/poker', function (req, res) {
        res.render('poker', {userId: req.user._id.toString()});
    })
    app.get('/*', function (req, res) {
        res.render('index', {});
    });
};
