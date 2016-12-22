angular.module('lokytControllers')
	.controller('newsItem', ['$scope', '$routeParams', '$http',  function($scope, $routeParams, $http) {
		$scope.routeParams = $routeParams.title;
    	var url = 'jsons/news/' + $scope.routeParams + '.json';
		
	    $http.get(url).success(
	    	function(data) {
	    		$scope.entry = data;
	    		$scope.isEvent = (data.type == "event") ? true : false;
	    		if($scope.isEvent)
	    			$scope.event = new Date(data.eventDateTime);
	    	}
	    ).error(function(data) {
	    	console.log(data);
	    });
	}])
	.directive('eventInfo', function() {
  return {
  	restrict: 'E',
    templateUrl: 'scripts/news/event-info.html'
  };
});;