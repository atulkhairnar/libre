angular.module('lokytControllers', [])
	.controller('mainController', ['$scope', '$http', function($scope, $http) {
		var url = 'jsons/home.json';
	    $http.get(url).success(
	    	function(data) {
	    		$scope.posts = data;
	    }).error(function(data) {
	    	console.log(data);
	    });
	}]);