angular.module('lokytControllers')
	.controller('newsItem', ['$scope', '$routeParams', '$http',  function($scope, $routeParams, $http) {
		$scope.routeParams = $routeParams.title;
    	var url = 'jsons/news/' + $scope.routeParams + '.json';
		
	    $http.get(url).success(
	    	function(data) {
	    		$scope.entry = data;
	    		$scope.venue = data.venue;
	    		$scope.isEvent = (data.type == "event") ? true : false;
	    		$scope.isDownload = (data.download != undefined) ? true : false;
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
	})
	.directive("downloadList", function() {
		return {
			restrict : 'E',
			template : '<a ng-href="#/news/{{post.download}}"><input class="btn btn-danger DownloadItemBtn" type="button" value="Download"></a>'
		}
	});