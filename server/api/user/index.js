'use strict';

const express = require('express');
const controller = require('./user.controller');
const router = express.Router();

// todo
/**
 * Add endpoints for:
 * get users
 * add user
 * get user
 * update user
 * delete user
 */

router.route('')
    .get(controller.get)
    .post(controller.add);

router.route('/:id')
    .get(controller.getById)
    .put(controller.update)
    .delete(controller.remove);

module.exports = router;

