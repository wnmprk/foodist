app.factory('UserFactory', ($http, AuthService) => {
    let userFactory = {};

    userFactory.getUser = () => {
        return AuthService.getLoggedInUser();
    }
    
    userFactory.getLikes = () => {
        return AuthService.getLoggedInUser()
        .then( user => {
            if (user) {
                return $http.get('/api/users/' + user._id + '/likes')
                .then( usersLikes => {
                    return usersLikes;
                });
            }
        });
    }
    
    userFactory.likeFood = () => {
        return AuthService.getLoggedInUser()
        .then( user => {
            if (user) {
                return $http.put('/api/users/' + user._id)
                .then( () => {
                    
                })
            }
        })
    }

    userFactory.unlikeFood = () => {
        
    }
    
    return userFactory;
});
