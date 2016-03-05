/**
 * Express configuration
 */

'use strict';

var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var errorHandler = require('errorhandler');
var passport = require('passport');

module.exports = function (app) {
    var env = app.get('env');

  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(cookieParser());
    app.use(express.static('public'));
    app.use(passport.initialize());
    app.use(passport.session());

    if ('production' === env) {
    app.use(morgan('dev'));
  }

  if ('development' === env) {
    app.use(morgan('dev'));
    app.use(errorHandler()); // Error handler - has to be last
  }
};