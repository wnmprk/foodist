app.directive('food', (AuthService) => {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/food/food.html',
        link: function (scope) {
        	scope.isLoggedIn = function () {
                return AuthService.isAuthenticated();
            };
        }
    };
});