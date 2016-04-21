app.directive('navbar', function ($rootScope, AuthService, AUTH_EVENTS, $state, $uibModal, FoodFactory) {

    return {
        restrict: 'E',
        scope: {},
        templateUrl: 'js/common/directives/navbar/navbar.html',
        link: function (scope) {
            
            scope.addForm = () => {
                var formModal = $uibModal.open({
                    animation: scope.animationsEnabled,
                    templateUrl: '/js/foods/add-food.html',
                    controller: () => {
                        scope.saveFood = (foodObj) => {
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

            scope.user = null;

            scope.isLoggedIn = function () {
                return AuthService.isAuthenticated();
            };

            scope.logout = function () {
                AuthService.logout().then(function () {
                   $state.go('home');
                });
            };

            var setUser = function () {
                AuthService.getLoggedInUser().then(function (user) {
                    scope.user = user;
                });
            };

            var removeUser = function () {
                scope.user = null;
            };

            setUser();

            $rootScope.$on(AUTH_EVENTS.loginSuccess, setUser);
            $rootScope.$on(AUTH_EVENTS.logoutSuccess, removeUser);
            $rootScope.$on(AUTH_EVENTS.sessionTimeout, removeUser);

        }

    };

});
