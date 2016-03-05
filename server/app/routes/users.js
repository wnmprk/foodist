'use strict';
var router = require('express').Router();
var mongoose = require('mongoose');
var User = mongoose.models.User;
// var Food = mongoose.models.Food;
module.exports = router;

var ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).end();
    }
};

// GET /api/users
router.get('/', ensureAuthenticated, function (req, res, next) {
    User.find({})
    .then(function (users) {
        res.status(200).send(users);
    })
    .then(null, next);
});

// GET /api/users/:userId
router.get('/:userId', ensureAuthenticated, function (req, res, next) {
    User.find({ _id: req.params.userId })
    .then(function (user) {
        res.status(200).send(user);
    })
    .then(null, next);
});

// PUT/UPDATE /api/users/:userId
router.put('/:userId', ensureAuthenticated, function (req, res, next) {
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
    .then(function (user) {
        res.status(201).json(user);
    })
    .then(null, next);
});