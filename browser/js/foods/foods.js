app.config(function ($stateProvider) {
    $stateProvider.state('foods', {
        url: '/foods',
        templateUrl: 'js/foods/foods.html',
        controller: 'FoodCtrl',
        resolve: {
    		foods: function (FoodFactory) {
                return FoodFactory.getAll();
            } 
    	}
    });
});

app.controller('FoodCtrl', function ($scope, foods) {
    $scope.foods = foods;
});