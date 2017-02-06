angular.module('lokytControllers')
	.controller('newsItem', ['$scope', '$routeParams', '$sce', '$http',  function($scope, $routeParams, $sce, $http) {
		$scope.routeParams = $routeParams.title;
    	var url = 'jsons/news/' + $scope.routeParams + '.json';
		
	    $http.get(url).success(
	    	function(data) {
	    		$scope.video = $sce.trustAsResourceUrl(data.video);
	    		$scope.postContent = "";
	    		$scope.entry = data;
	    		data.content.forEach(function(item, index) {
	    			$scope.postContent += "<p>" +  item + "</p>";
	    		});
	    		$scope.postContent = $sce.trustAsHtml($scope.postContent);
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
			template : '<a ng-href="{{entry.btnValue}}" target="_blank" download><input class="btn btn-danger DownloadItemBtn" type="button" value="{{entry.btnText}}"></a>'
		}
	});