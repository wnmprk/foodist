app.config( ($stateProvider) => {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        resolve: {
        	user: (AuthService, $state) => {
                return AuthService.getLoggedInUser()
                .then( user => {
                	if (user) {
                		$state.go('foods');
                	}
                })
            }
        }
    });
});