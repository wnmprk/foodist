app.directive('food', ['FoodFactory', 'UserFactory', function(FoodFactory, UserFactory, $state) {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/food/food.html',
        link: function (scope, element, attribute) {
        	scope.user = UserFactory.getUser();
        	scope.toggleLike = function() {
        		$state.go('add-food')
        	}
        }
    };
}]);