app.config( $stateProvider => {
    $stateProvider.state('foods', {
        url: '/foods',
        templateUrl: 'js/foods/foods.html',
        controller: 'FoodCtrl',
        resolve: {
            foods: (FoodFactory) => {
                return FoodFactory.getAll()
                    .then( foods => {
                        return foods;
                    });
            },
            user: (AuthService) => {
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
            foods: (FoodFactory) => {
                return FoodFactory.getAll()
                .then( foods => {
                    return foods;
                });
            },
            user: (AuthService) => {
                return AuthService.getLoggedInUser()
            }
        }
    });
});

app.controller('FoodCtrl', ($scope, $state, AuthService, FoodFactory, foods, user) => {
    $scope.foods = foods;
    $scope.user = user;
    
    $scope.recipes = [1];

    document.getElementById('searchbar').onkeydown = function(e) {
        if (e.keyCode === 13) {
            let query = document.getElementById('searchbar').value;
            query = query.toLowerCase().split(' ');
            console.log(query)
        }
    };

    $scope.dosomething = ($event) => {
        $event.stopPropagation();
        $event.preventDefault();
    }

    $scope.logout = () => {
        AuthService.logout()
        .then( () => {
            $state.go('home');
        });
    }

    $scope.saveFood = (foodObj) => {
        foodObj.name = foodObj.name.toLowerCase();
        foodObj.tags = foodObj.tags.toLowerCase().split(' ');
        FoodFactory.add(foodObj)
        .then( () => {
            $state.go('foods');
        });
    }

    $scope.cancel = () => {
        $state.go('foods');
    }
});