'use strict';

var express = require('express');
var passport = require('passport');
var config = require('../config/environment');
var User = require('../api/user/user.model');

require('./local/passport').setup(User, config);

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});

var router = express.Router();

router.use('/login', passport.authenticate('local',
    {
        successRedirect: '/poker',
        failureRedirect: '/login'
    }
));
router.use('/logout', function (req, res) {
    req.logout();
    res.cookie('token', null);
    res.redirect('/');
});

module.exports = router;
