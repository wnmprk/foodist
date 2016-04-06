app.factory('FoodFactory', ($http) => {
    let FoodFactory = {};

    FoodFactory.getAll = function() {
        return $http.get('/api/foods')
            .then( foods => {
                return foods.data;
            })
    }

    FoodFactory.getOne = (foodId) => {
        return $http.get('/api/foods/' + foodId)
            .then( food => {
                return food.data;
            })
    }

    FoodFactory.add = (foodObj) => {
        return $http.post('/api/foods/', foodObj)
            .then( food => {
                return food.data;
            })
    }

    FoodFactory.edit = (foodObj) => {
        return $http.post('/api/foods/', foodObj)
            .then( food => {
                return food.data;
            })
    }

    FoodFactory.delete = (foodId) => {
        return $http.delete('/api/foods/' + foodId)
    }

    return FoodFactory;
});