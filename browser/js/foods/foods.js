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

    $scope.clickHeart = ($event, food) => {
        $event.stopPropagation();
        $event.preventDefault();
        UserFactory.toggleLike(food)
        .then( () => {
            // ...does not persist
            if ($event.target.style.color === 'red') {
                $event.target.style.color = 'white'    
            } else {
                $event.target.style.color = 'red'
            }
            console.log(user.name, 'un/liked', food.name);
        })
    }
    // brokennnnnnnnnn
    $scope.addForm = () => {
        var formModal = $uibModal.open({
            animation: $scope.animationsEnabled,
            templateUrl: '/js/foods/add-food.html',
            controller: () => {
                $scope.saveFood = (foodObj) => {
                    console.log('IM IN THE save food func', foodObj)
                    FoodFactory.add(foodObj)
                    .then( () => {
                        // page does not update with new item immediately
                        formModal.close();
                    });
                }
            }
        })
    }


});