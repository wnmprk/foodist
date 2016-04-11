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
});

app.controller('FoodCtrl', ($scope, $state, $uibModal, AuthService, FoodFactory, UserFactory, foods, user) => {
    $scope.foods = foods;
    $scope.user = user;
    
    $scope.recipes = [1];

    $scope.addForm = function() {
        var formModal = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: '/js/foods/add-food.html',
            controller: function () {
                $scope.saveFood = (foodObj) => {
                    FoodFactory.add(foodObj)
                    .then( () => {
                        // page does not update with new item immediately
                        formModal.close();                
                    });
                }
            }
        })
    }

    document.getElementById('searchbar').onkeydown = function(e) {
        if (e.keyCode === 13) {
            let query = document.getElementById('searchbar').value;
            query = query.toLowerCase().split(' ');
            console.log(query)
        }
    };

    $scope.clickHeart = ($event, food) => {
        $event.stopPropagation();
        $event.preventDefault();
        // $event.target.style.color = 'white'
        UserFactory.toggleLike(food)
        .then( () => {
            console.log(user.name, 'un/liked', food.name);
        })
    }

    $scope.logout = () => {
        AuthService.logout()
        .then( () => {
            $state.go('home');
        });
    }

});