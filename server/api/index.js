'use strict';

const express = require('express');

var auth = require('../auth/auth.service');
const router = express.Router();

// Insert routes below
router.use('/user', auth.isAuthenticated(),  require('./user'));

module.exports = router;
