// app.config( $stateProvider => {
//     $stateProvider.state('profile', {
//         url: '/profile',
//         templateUrl: 'js/profile/profile.html',
//         controller: 'ProfileCtrl',
//         resolve: {
//             user: (AuthService) => {
//                 return AuthService.getLoggedInUser()
//             }
//         }
//     });
// });

// app.controller('ProfileCtrl', ($scope, $state, $uibModal, AuthService, FoodFactory, UserFactory, foods, user) => {
//     $scope.foods = foods;
//     $scope.user = user;
    
//     $scope.addForm = () => {
//         var formModal = $uibModal.open({
//             animation: $scope.animationsEnabled,
//             templateUrl: '/js/foods/add-food.html',
//             controller: () => {
//                 $scope.saveFood = (foodObj) => {
//                     console.log('IM IN THE save food func', foodObj)
//                     FoodFactory.add(foodObj)
//                     .then( () => {
//                         // page does not update with new item immediately
//                         formModal.close();
//                     });
//                 }
//             }
//         })
//     }

//     $scope.logout = () => {
//         AuthService.logout()
//         .then( () => {
//             $state.go('home');
//         });
//     }

// });