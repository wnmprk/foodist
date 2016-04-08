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
    
    userFactory.likeFood = (userId, foodId) => {
        return AuthService.getLoggedInUser()
        .then( user => {
            if (user) {
                return $http.put('/api/users/' + user._id, foodId)
                .then( (user) => {
                    user.data.likes.push(foodId);
                    return user.data;
                })
            }
        })
    }

    userFactory.unlikeFood = () => {
        
    }
    
    return userFactory;
});
