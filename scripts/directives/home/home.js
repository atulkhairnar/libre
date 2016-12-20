angular.module('lokytControllers')
	.controller('mainController', ['$scope', '$http', function($scope, $http) {
		var url = 'jsons/home.json';
		$scope.noUpcomingEvent = true;   // no upcoming events
	    $http.get(url).success(
	    	function(data) {
	    		$scope.posts = data;
	    		// filter out list of upcoming events
	    		$scope.upcomingEvents = data.filter(function(e) {
	    			if(e.type == "event" && new Date(e.eventDateTime) > new Date()) {
	    				return e;
	    			}
	    		});
	    		// set noUpcomingEvent value 
	    		if($scope.upcomingEvents.length) {	
	    			$scope.noUpcomingEvent = false;
	    			$scope.eventImg = $scope.upcomingEvents[0].img;
	    		}
	    	}
	    ).error(function(data) {
	    	console.log(data);
	    });

	    $scope.downloadBook = "img/book/nfaoe.jpg";
	}]);
