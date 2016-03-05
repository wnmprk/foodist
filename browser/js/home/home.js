app.config(function ($stateProvider) {
    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'js/home/home.html',
        // resolve: {
        //     user: function(UserFactory, $state) {
        //         return Auth.getUser()
        //         .then(function (user) {
        //             // user should not be allowed to go home when logged in
        //             if (user) {
        //                 $state.go('foods');
        //             }
        //             return user;
        //         })
        //     }
        // }
    });
});