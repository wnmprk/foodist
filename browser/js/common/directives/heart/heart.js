app.directive('heart', ['UserFactory', function(UserFactory) {
    return {
        restrict: 'E',
        template: '<div class="heart">❤</div>',
        link: function(scope, element, attribute) {
            // element.click()
            scope.user = UserFactory.getUser();
            console.log(scope.user)

            scope.like = function(food) {
            	console.log('LIKED', food)
            }
            scope.unlike = function(food) {

            }
            var x = angular.element(document.querySelector('.heart'));
            console.log(x)
            x.bind('click', function() {
                console.log('clicked');
            });
        }
    };
}]);