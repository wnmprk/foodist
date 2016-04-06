app.directive('food', ['FoodFactory', 'UserFactory', (FoodFactory, UserFactory) => {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/food/food.html',
        link: (scope, element, attribute) => {
        	scope.user = UserFactory.getUser();

            element.bind('click', (e) => {
                if (e.stopNextHandler !== true) {
                    // alert('want to prevent this');    
                }
            }); 
        }
    };
}]);