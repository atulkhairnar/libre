angular.module('lokytControllers')
	.controller('newsItem', ['$scope', '$routeParams', '$http',  function($scope, $routeParams, $http) {
		$scope.routeParams = $routeParams.title;
    	var url = 'jsons/news/' + $scope.routeParams + '.json';
		
	    $http.get(url).success(
	    	function(data) {
	    		$scope.entry = data;
	    		$scope.event = (data.type == "event") ? true : false; 
	    	}
	    ).error(function(data) {
	    	console.log(data);
	    });
	}]);