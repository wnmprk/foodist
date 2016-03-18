app.config(function($stateProvider) {
    $stateProvider.state('foods', {
        url: '/foods',
        templateUrl: 'js/foods/foods.html',
        controller: 'FoodCtrl',
        resolve: {
            foods: function(FoodFactory) {
                return FoodFactory.getAll()
                .then(function (foods) {
                    return foods;
                });
            },
            user: function(AuthService) {
                return AuthService.getLoggedInUser()
            }
        }
    });

    $stateProvider.state('add-food', {
        url: '/add-food',
        templateUrl: '/js/foods/add-food.html',
        controller: 'FoodCtrl',
        data: { authenticate: true },
        resolve: {
            foods: function(FoodFactory) {
                return FoodFactory.getAll()
                .then(function (foods) {
                    return foods;
                });
            },
            user: function(AuthService) {
                return AuthService.getLoggedInUser()
            }
        }
    });
});

app.controller('FoodCtrl', function($scope, $state, AuthService, FoodFactory, foods, user) {
    $scope.foods = foods;
    $scope.user = user;
    
    $scope.logout = function() {
        AuthService.logout()
        .then(function () {
           $state.go('home');
        });
    }

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