app.config(function($stateProvider) {
    $stateProvider.state('foods', {
        url: '/foods',
        templateUrl: 'js/foods/foods.html',
        controller: 'FoodCtrl',
        resolve: {
            foods: function(FoodFactory) {
                return FoodFactory.getAll();
            }
        }
    });

    $stateProvider.state('add-food', {
        url: '/add-food',
        templateUrl: '/js/foods/add-food.html',
        controller: 'FoodCtrl',
        resolve: {
            foods: function(FoodFactory) {
                return FoodFactory.getAll();
            }
            // user: function(AuthService) {
            //     return AuthService.getLoggedInUser();
            // }
        }
        // data : { authenticate: true }
    });
});

app.controller('FoodCtrl', function($scope, $state, foods, FoodFactory) {
    $scope.foods = foods;

    $scope.saveFood = function(foodObj) {
        foodObj.name = foodObj.name.toLowerCase();
        foodObj.tags = foodObj.tags.toLowerCase().split(' ');
        FoodFactory.add(foodObj)
        .then(function() {
            $state.go('foods');
        });
    }

    $scope.cancel = function () {
        $state.go('foods');
    }
});