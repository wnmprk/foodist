app.directive('food', ['FoodFactory', 'UserFactory', (FoodFactory, UserFactory) => {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/food/food.html'
        // link: (scope, element, attribute) => {
        // 	scope.user = UserFactory.getUser();

        //     var clickingCallback = function() {
        //         alert('clicked!')
        //     };
        //     element.bind('click', clickingCallback);
        // }
    };
}]);