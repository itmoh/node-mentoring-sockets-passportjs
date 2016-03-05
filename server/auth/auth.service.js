'use strict';

var mongoose = require('mongoose');
var passport = require('passport');
var config = require('../config/environment');
var jwt = require('jsonwebtoken');
var expressJwt = require('express-jwt');
var compose = require('composable-middleware');
var User = require('../api/user/user.model');
var validateJwt = expressJwt({
    secret: config.secrets.session,
    getToken: function(req) {
        return req.cookies.token && JSON.parse(req.cookies.token);
    }
});

/**
 * Attaches the user object to the request if authenticated
 * Otherwise returns 403
 */
function isAuthenticated() {
    return compose()
    // Validate jwt
        .use(validateJwt)
        // Attach user to request
        .use(function (req, res, next) {
            User.findOne({_id: req.user._id})
                .then(function (user) {
                    if (!user) {
                        return res.status(401).send('Unauthorized');
                    }
                    req.user = user;
                    next();
                })
                .catch(function (err) {
                    return next(err);
                });
        });
}

/**
 * Returns a jwt token signed by the app secret
 */
function signToken(id) {
    return jwt.sign({_id: id}, config.secrets.session, {expiresInMinutes: 60 * 5});
}

/**
 * Set token cookie directly for oAuth strategies
 */
function setTokenCookie(req, res) {
    if (!req.user) {
        return res.status(404).json({message: 'Something went wrong, please try again.'});
    }
    var token = signToken(req.user._id);
    res.cookie('token', JSON.stringify(token));
    res.redirect('/');
}

exports.isAuthenticated = isAuthenticated;
exports.signToken = signToken;
exports.setTokenCookie = setTokenCookie;
