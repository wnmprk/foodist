'use strict';
const mongoose = require('mongoose');

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    recipeUrl: {
        type: String,
        required: true
    }
});

mongoose.model('Food', schema);
