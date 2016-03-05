app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        resolve: {
        	user: function(AuthService, $state) {
                return AuthService.getLoggedInUser()
                .then(function (user) {
                	if (user) {
                		$state.go('foods');
                	}
                })
            }
        }
    });
});