app.directive('food', function () {
    return {
        restrict: 'E',
        templateUrl: 'js/common/directives/food/food.html'
    };
});

app.factory('FoodFactory', function ($http) {
	var FoodFactory = {};
	
	FoodFactory.getAll = function () {
		return $http.get('/api/foods')
		.then(function (res) {
			return res.data;
		})
	}

	FoodFactory.getOne = function (food) {
		return $http.get('/api/foods/' + food._id)
		.then(function (res) {
			return res.data;
		})
	}

	return FoodFactory;
});