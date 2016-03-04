'use strict';
var OK = 200;
var CREATED = 201;
var NOT_FOUND = 404;


var path = require('path');
var User = require('./user.model');
var q = require('q');

exports.getCurrentUser = function getCurrentUser(req, res) {
    return q.Promise(
        function (resolve, reject) {
            if (!req.user || !req.user._id) {
                reject();
            } else {
                resolve(req.user._id);
            }
        })
        .then(function (userId) {
            return User.findById(userId);
        })
        .then(function (result) {
            res.status(OK).json(result);
        })
        .catch(function (err) {
            res.status(NOT_FOUND).json(err);
        });
}

exports.get = function get(req, res) {
    return User.find(req.params)
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
    var modelInstance = new User(req.body);
    return modelInstance.save()
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
    return User.findById(req.params.id)
        .then(function (result) {
            res.status(OK).json(result);
        })
        .catch(function (err) {
            res.status(NOT_FOUND).json(err);
        });
}

exports.update = function update(req, res) {
    return User.findById(req.params.id)
        .then(function (modelInstance) {
            var updatedInstance = _lodash.extend(modelInstance, req.body);
            return updatedInstance.save();
        })
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
    return User.remove({_id: req.params.id})
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

