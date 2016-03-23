app.factory('FoodFactory', function($http) {
    var FoodFactory = {};

    FoodFactory.getAll = function() {
        return $http.get('/api/foods')
            .then(function(foods) {
                return foods.data;
            })
    }

    FoodFactory.getOne = function(foodId) {
        return $http.get('/api/foods/' + foodId)
            .then(function(food) {
                return food.data;
            })
    }

    FoodFactory.add = function(foodObj) {
        return $http.post('/api/foods/', foodObj)
            .then(function(food) {
                return food.data;
            })
    }

    FoodFactory.edit = function(foodObj) {
        return $http.post('/api/foods/', foodObj)
            .then(function(food) {
                return food.data;
            })
    }

    FoodFactory.delete = function(foodId) {
        return $http.delete('/api/foods/' + foodId)
    }

    return FoodFactory;
});