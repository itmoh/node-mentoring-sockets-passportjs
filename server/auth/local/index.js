'use strict';

var express = require('express');
var passport = require('passport');
var auth = require('../auth.service');
var router = express.Router();

router
    .post(['/', ''],
        function(reg, res, next) {
            reg.params.name = reg.body.name;
            reg.params.password = reg.body.password;
            next();
        },
        passport.authenticate('local', {
            failureRedirect: '/login'
        }),
        auth.setTokenCookie);

module.exports = router;
