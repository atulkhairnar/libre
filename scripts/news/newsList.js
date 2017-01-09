function newsListController($scope, $http) {
	var ctrl = this;
	var url = 'jsons/home.json';
	$http.get(url).success(
	    	function(data) {
	    		ctrl.items = data;
	    	}) 
}

angular.module('lokytControllers')
	.component('newsList', {
		templateUrl: 'scripts/news/news-list.html',
		controller : newsListController	
	});