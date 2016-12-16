angular.module('lokytControllers', ['ngRoute'])
	.controller('mainController',[ '$scope', '$route', function($scope, $route) {
	    // create a message to display in our view
	    $scope.$route = $route;
	    $scope.message = 'Everyone come and see how good I look!';
	}])

	.controller('campaignsCtrl', function($scope, $route) {
		$scope.$route = $route;
	    $scope.campaigns = [
	                  { img : "img/campaign/edu.jpg",
	                    thumb : "img/campaign/thumbnails/tn_edu.jpg",
	                    name : "Education For All",
	                    download: "#/campaigns/education",
	                    discription : "It is a fight against the policies that are being implemented in Education before and after Independence and how the education system is being sold to corporates from India and abroad while the majority of Indians have no access to free and good quality education."           // TODO :: Change discription
	                  },
	                  { img : "img/campaign/fdi.jpg",
	                    thumb : "img/campaign/thumbnails/tn_fdi.jpg",
	                    name : "Fight FDI in Retail",
	                    download: "#/campaigns/retail",
	                    discription : "It is a myth that FDI in Retail will benefit farmers create jobs increase storage of goods and help India progress. Our campaign spreads the reality that due to Wallmart India's 4 crore people will have to say good bye to their jobs."   // TODO :: change discription
	                  },
	                  { img : "img/campaign/vaw.jpg",
	                    thumb : "img/campaign/thumbnails/tn_vaw.jpg",
	                    name : "'Say NO to Violence Against Women",
	                    download: "#/campaigns/vaw",
	                    discription : "It questions the sexual harassment done to women and the way a woman is looked upon in the society and above all the role of media in promoting women as a commodity."
	                  }, 
	                  { img : "img/campaign/corruption.gif",
	                    thumb : "img/campaign/thumbnails/tn_corruption.gif",
	                    name : "Eradicate Corruption",
	                    download: "#/campaigns/corruption",
	                    discription : "In the name of globalization the foreign brigands are being invited back into the country. Times have changed. Last time they had to use force. This time they are being welcomed with open arms. This booklet is an overview of the post-liberalisation policies and how they are instrumental in selling out the country again."
	                  },
	                  { img : "img/campaign/nuke.jpg",     
	                    thumb : "img/campaign/thumbnails/tn_nuke.jpg",
	                    name : "Nuclear Energy - A Technology From Hell",
	                    download: "#/campaigns/nuclear",
	                    discription : "It exposes the real reason behind the Nuclear Deal and how Nuclear Energy is not at all cheap safe and clean. It also explains how India can fulfill it's energy needs without going nuclear."
	                  },
	                  { img : "img/campaign/bhopal.jpg",
	                    thumb : "img/campaign/thumbnails/tn_bhopal.jpg",
	                    name : "No More Bhopals",
	                    download: "#/campaigns/bhopal",
	                    discription : "Even as 28 years have passed since the world’s worst industrial disaster in Bhopal, the Bhopal Gas Tragedy is still a tragedy. More than 20,000 people have died till date. Many die even today. Yet many more suffer from various illnesses today.."
	                  }
	                ];
	})

	.controller('campaignPageCtrl', [ '$scope', '$routeParams', '$http', '$sce', 'Campaign', function($scope, $routeParams, $http, $sce, Campaign) {
	    // create a message to display in our view
	    $scope.thisCampaign = $routeParams.campaign;

	    var url = 'jsons/' + $scope.thisCampaign + '.json';
	    //var url = 'jsons/nuclear.json';
	    $http.get(url).success(function(data) {
	    	$scope.title = data.title;
	    	$scope.subtitle = data.subtitle;
	    	$scope.img = data.img;
	    	$scope.content = $sce.trustAsHtml(data.content);
	    	$scope.pageURL = document.URL;


	    }).error(function(data) {
	    	console.log(data);
	    });
	    //$scope.abc = Campaign.query();
	    /*$scope.abc = Campaign.get({campaignId: $routeParams.campaign}, function(campaign) {
	      $scope.mainData = campaign;
	    });*/
	    $scope.message = 'Everyone come and see how good I look!';

	}])

	.controller('mediaCtrl', function($scope, $route) {
		$scope.$route = $route;
	})

	.controller('joinCtrl', function($scope, $route) {
		$scope.$route = $route;
	});
