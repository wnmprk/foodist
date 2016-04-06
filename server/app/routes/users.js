'use strict';
const router = require('express').Router();
const mongoose = require('mongoose');
let User = mongoose.models.User;
// var Food = mongoose.models.Food;
module.exports = router;

const ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).end();
    }
};

// GET /api/users
router.get('/', ensureAuthenticated, function (req, res, next) {
    User.find({})
    .then( users => {
        res.status(200).send(users);
    })
    .then(null, next);
});

// GET /api/users/:userId
router.get('/:userId', ensureAuthenticated, function (req, res, next) {
    User.find({ _id: req.params.userId })
    .then( user => {
        res.status(200).send(user);
    })
    .then(null, next);
});

// PUT/UPDATE /api/users/:userId
router.put('/:userId', ensureAuthenticated, function (req, res, next) {
    User.findByIdAndUpdate(req.params.userId, req.body, { new: true })
    .then( user => {
        res.status(201).json(user);
    })
    .then(null, next);
});