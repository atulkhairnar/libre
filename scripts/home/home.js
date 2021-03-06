angular.module('lokytControllers')
	.controller('mainController', ['$scope', '$http', '$sce', function($scope, $http, $sce) {
		var url = 'jsons/home.json';
		var videoUrl = 'jsons/videos.json';
		$scope.noUpcomingEvent = true;   // no upcoming events
	    $http.get(url).success(
	    	function(data) {
	    		$scope.posts = data;
	    		// filter out list of upcoming events
	    		$scope.upcomingEvents = data.filter(function(e) {
	    			if(e.type == "event" && new Date(e.eventDateTime) > new Date()) {
	    				return e;
	    			}
	    			if(e.type == "video") {
	    				e.video = $sce.trustAsResourceUrl(e.video)
	    			}
	    		});
	    		// set noUpcomingEvent value 
	    		if($scope.upcomingEvents.length) {	
	    			$scope.noUpcomingEvent = false;
	    			$scope.nextEvent = $scope.upcomingEvents[0];
	    		}
	    	}
	    ).error(function(data) {
	    	console.log(data);
	    });


	    // call video list api
	    $http.get(videoUrl).success(
	    	function(data) {
	    		// interpolation is required for youtube urls
	    		$scope.videos = data.map(function(e,i){ 
	    			e.url = $sce.trustAsResourceUrl(e.url); 
	    			return e;
	    		});
	    	}
	    ).error(function(data) {
	    	console.log(data);
	    });

	    $scope.downloadBook = "img/book/nfaoe.jpg";
}])
.directive("socialIcon", function() {
	return {
		restrict : 'E',
		templateUrl : 'scripts/directives/socialIcons.html'
	}
})
/* This directive will add classes to img tag according to the diamensions of the image*/ 
.directive('imageMode', function() {
  function link(scope, element, attrs) {
  	element.bind('load', function() {
  		var diamention = $(element[0]).width()/$(element[0]).height();
	  	if(diamention > 1) {
	  		element.addClass("landscape");
	  	} else {
	  		element.addClass("potrait");
	  	}
	});
  };
  return {
    link: link
  };
});