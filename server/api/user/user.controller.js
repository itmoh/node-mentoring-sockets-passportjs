'use strict';
var OK = 200;
var CREATED = 201;
var NOT_FOUND = 404;

var User = require('./user.model');
var q = require('q');

exports.get = function get(req, res) {
    // todo: find users
    .then(function (result) {
        res.status(OK).json({
            status: 'success',
            total: result.length,
            responses: result
        });
    })
        .catch(function (err) {
            res.status(NOT_FOUND).json(err);
        });
}

exports.add = function add(req, res) {
    // todo: create and save user
    .then(function (result) {
        res.status(CREATED).json({
            status: 'success',
            response: result
        });
    })
        .catch(function (err) {
            res.send(err);
        });
}

exports.getById = function getById(req, res) {
    // todo: find sigle user by id
    .then(function (result) {
        res.status(OK).json(result);
    })
        .catch(function (err) {
            res.status(NOT_FOUND).json(err);
        });
}

exports.update = function update(req, res) {
    // User.findById(req.params.id)
    // .then(function (modelInstance) {
    //     var updatedInstance = Object.assign(modelInstance, req.body);
    //     return updatedInstance.save();
    // })
    //User.update({ _id: id }, { $set: { size: 'large' }})
    //User.findByIdAndUpdate(id, { $set: { size: 'large' }})
    .then(function (result) {
        res.status(OK).json({
            status: 'success',
            response: result
        });
    })
        .catch(function (err) {
            res.status(NOT_FOUND).json(err);
        });
}

exports.remove = function remove(req, res) {
    // todo: remove
    .then(function (result) {
        res.json({
            status: 'success',
            response: result
        });
    })
        .catch(function (err) {
            res.send(err);
        });
}
exports.getCurrentUser = function getCurrentUser(req, res) {
    return q.Promise(
        function (resolve, reject) {
            if (!req.user || !req.user._id) {
                reject();
            } else {
                resolve(req.user._id);
            }
        })
        .then(User.findById)
        .then(function (result) {
            res.status(OK).json(result);
        })
        .catch(function (err) {
            res.status(NOT_FOUND).json(err);
        });
}
