'use strict';

const express = require('express'),
    passport = require('passport'),
    router = express.Router();

router.use('/user', require('./user'));
router.post('/login', passport.authenticate('local',
    {
        successRedirect: '/',
        failureRedirect: '/login.html'
    }
));

module.exports = router;
