'use strict';
const router = require('express').Router();
module.exports = router;
const mongoose = require('mongoose');
let Food = mongoose.models.Food;

const ensureAuthenticated = function (req, res, next) {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.status(401).end();
    }
};

// GET /api/foods
router.get('/', ensureAuthenticated, function (req, res, next) {
	Food.find({})
    .then( foods => {
        res.status(200).send(foods);
    })
    .then(null, next);
});

// GET /api/foods/:foodId
router.get('/:foodId', ensureAuthenticated, function (req, res, next) {
    Food.find({ _id: req.params.foodId })
    .then( food => {
        res.status(200).send(food);
    })
    .then(null, next);
});

// PUT/UPDATE /api/foods/:foodId
router.put('/:foodId', ensureAuthenticated, function (req, res, next) {
	req.food.set(req.body);
	req.food.save()
	.then( () => {
        res.json(req.food);
	})
	.then(null, next);
});

// POST/CREATE /api/foods
router.post('/', ensureAuthenticated, function (req, res, next) {
    req.body.name = req.body.name.toLowerCase();
    req.body.tags = req.body.tags.split(' ');
    Food.create(req.body)
    .then( food => {
        res.status(201).send(food);
    })
    .then(null, next);
});

// DELETE/REMOVE /api/foods/:foodId
router.delete('/:foodId', ensureAuthenticated, function (req, res, next) {
    req.food.remove()
    .then( () => {
        res.status(204).end();
    })
    .then(null, next);
});