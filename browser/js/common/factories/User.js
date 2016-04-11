app.factory('UserFactory', ($http, AuthService) => {
    let userFactory = {};

    userFactory.getUser = () => {
        return AuthService.getLoggedInUser();
    }
    
    userFactory.toggleLike = (food) => {
        return AuthService.getLoggedInUser()
        .then( user => {
            if (user) {
                return $http.put('/api/users/' + user._id + '/likes', food)
                .then( () => {
                    return user.data;
                })
            }
        })
    }
    
    return userFactory;
});
