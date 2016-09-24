'use strict';

const express = require('express'),
    passport = require('passport'),
    router = express.Router();

router.use('/user', require('./user'));

module.exports = router;
