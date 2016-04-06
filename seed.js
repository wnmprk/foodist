/*

This seed file is only a placeholder. It should be expanded and altered
to fit the development of your application.

It uses the same file the server uses to establish
the database connection:
--- server/db/index.js

The name of the database used is set in your environment files:
--- server/env/*

This seed file has a safety check to see if you already have users
in the database. If you are developing multiple applications with the
fsg scaffolding, keep in mind that fsg always uses the same database
name in the environment files.

*/

const mongoose = require('mongoose');
const Promise = require('bluebird');
const chalk = require('chalk');
const connectToDb = require('./server/db');
let User = Promise.promisifyAll(mongoose.model('User'));
let Food = Promise.promisifyAll(mongoose.model('Food'));

let seedUsers = function () {

    let users = [
        {
            email: 'testing@fsa.com',
            password: 'password'
        },
        {
            email: 'obama@gmail.com',
            password: 'potus'
        }
    ];

    return User.createAsync(users);

};

let seedFoods = function () {

    let foods = [
        {
            name: 'carrot cake with maple-cream cheese frosting',
            tags: ['cake', 'carrot', 'cream cheese', 'maple'],
            imageUrl: 'http://farm4.static.flickr.com/3240/3092135047_c5441a6494.jpg',
            recipeUrl: 'http://smittenkitchen.com/blog/2008/12/carrot-cake-with-maple-cream-cheese-frosting/'
        },
        {
            name: 'blueberry crumb bars',
            tags: ['blueberry', 'fruit'],
            imageUrl: 'http://farm4.static.flickr.com/3002/2710636010_6070701ab3.jpg',
            recipeUrl: 'http://smittenkitchen.com/blog/2008/07/blueberry-crumb-bars/'
        },
        {
            name: 'snickerdoodles',
            tags: ['cookie', 'cinammon'],
            imageUrl: 'http://farm3.static.flickr.com/2565/3912834773_3f6115b991.jpg',
            recipeUrl: 'http://smittenkitchen.com/blog/2009/09/snickerdoodles/'
        },
        {
            name: 'apple pie cookies',
            tags: ['apple', 'fruit', 'cookie', 'pie'],
            imageUrl: 'http://farm7.static.flickr.com/6174/6239625942_bc37d3083c.jpg',
            recipeUrl: 'http://smittenkitchen.com/blog/2011/10/apple-pie-cookies/'
        },
        {
            name: 'banana puddings with vanilla bean wafers',
            tags: ['banana', 'fruit', 'pudding', 'vanilla'],
            imageUrl: 'http://smittenkitchen.com/wp-content/uploads/banana-puddings-with-vanilla-bean-wafers.jpg',
            recipeUrl: 'http://smittenkitchen.com/blog/2016/01/banana-pudding-with-vanilla-bean-wafers/'
        },
        {
            name: 'lemon bars',
            tags: ['lemon', 'fruit'],
            imageUrl: 'http://farm3.static.flickr.com/2119/2169032332_08128136a0.jpg',
            recipeUrl: 'http://smittenkitchen.com/blog/2008/01/lemon-bars/'
        },
        {
            name: 'peanut butter brownies',
            tags: ['peanut butter', 'brownie', 'chocolate'],
            imageUrl: 'http://farm2.static.flickr.com/1162/1464863891_340f0c12d7.jpg',
            recipeUrl: 'http://smittenkitchen.com/blog/2007/10/peanut-butter-brownies/'
        },
        {
            name: 'peach pie',
            tags: ['peach', 'fruit', 'pie'],
            imageUrl: 'http://farm9.staticflickr.com/8154/7626532960_5fc37789c3.jpg',
            recipeUrl: 'http://smittenkitchen.com/blog/2012/07/peach-pie/'
        },
        {
            name: 'key lime pie',
            tags: ['lime', 'fruit', 'pie'],
            imageUrl: 'http://smittenkitchen.com/wp-content/uploads/key-lime-pie.jpg',
            recipeUrl: 'http://smittenkitchen.com/blog/2015/01/key-lime-pie/'
        },
        {
            name: 'strawberry cheesecake ice cream pie',
            tags: ['strawberry', 'fruit', 'cheesecake', 'ice cream', 'pie'],
            imageUrl: 'https://c1.staticflickr.com/1/490/18899918486_7a4c16ea23.jpg',
            recipeUrl: 'http://smittenkitchen.com/blog/2015/06/strawberry-cheesecake-ice-cream-pie/'
        },
        {
            name: 'ice cream sandwiches',
            tags: ['ice cream'],
            imageUrl: 'http://farm8.staticflickr.com/7214/6961536206_aeeb5860df.jpg',
            recipeUrl: 'http://smittenkitchen.com/blog/2012/04/classic-ice-cream-sandwiches/'
        },
        {
            name: 'frozen hot chocolate',
            tags: ['chocolate', 'milkshake'],
            imageUrl: 'http://smittenkitchen.com/wp-content/uploads/frozen-hot-chocolate1.jpg',
            recipeUrl: 'http://smittenkitchen.com/blog/2015/08/frozen-hot-chocolate/'
        }
    ];

    return Food.createAsync(foods);

};

connectToDb.then( () => {
    // User.findAsync({}).then(function (users) {
    //     if (users.length === 0) {
    //         return seedUsers();
    //     } else {
    //         console.log(chalk.magenta('Seems to already be user data, exiting!'));
    //         process.kill(0);
    //     }
    Food.findAsync({}).then( foods => {
        if (foods.length === 0) {
            return seedFoods();
        } else {
            console.log(chalk.magenta('Seems to already be food data, exiting!'));
            process.kill(0);
        }
    }).then( () => {
        console.log(chalk.green('Seed successful!'));
        process.kill(0);
    }).catch( err => {
        console.error(err);
        process.kill(1);
    });
});
