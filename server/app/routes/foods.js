'use strict';
var router = require('express').Router();
module.exports = router;
var mongoose = require('mongoose');
var Food = mongoose.models.Food;
// var _ = require('lodash');

// var ensureAuthenticated = function (req, res, next) {
//     if (req.isAuthenticated()) {
//         next();
//     } else {
//         res.status(401).end();
//     }
// };

// GET /api/foods
router.get('/', function (req, res, next) {
	Food.find({})
    .then(function (foods) {
        res.status(200).send(foods);
    })
    .then(null, next);
});

// GET /api/foods/:foodId
router.get('/:foodId', function (req, res, next) {
    Food.find({ _id: req.params.foodId })
    .then(function (food) {
        res.status(200).send(food);
    })
    .then(null, next);
});

// PUT/UPDATE /api/foods/:foodId
router.put('/:foodId', function (req, res, next) {
	req.food.set(req.body);
	req.food.save()
	.then(function () {
	    res.json(req.food);
	})
	.then(null, next);
});

// POST/CREATE /api/foods
router.post('/', function (req, res, next) {
    Food.create(req.body.food)
    .then(function (food) {
        res.status(201).send(food);
    })
    .then(null, next);
});

// DELETE/REMOVE /api/foods/:foodId
router.delete('/:foodId', function (req, res, next) {
    req.food.remove()
    .then(function() {
        res.status(204).end();
    })
    .then(null, next);
});