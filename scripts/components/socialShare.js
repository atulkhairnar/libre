function socialShareController($scope, $location) {
	var ctrl = this;
	var url = $location.url();
	var lokayatUrl = 'http%3A//lokayat.org.in/%23';
	var shareLink = lokayatUrl + url;
	var absUrl = $location.absUrl();
	var newsTitle = url.split('_').join(' ');
	ctrl.socialIcons = [
							{ 
								'media' : 'facebook',
								'shareLink' : 'https://www.facebook.com/sharer/sharer.php?u=' + shareLink
							},{
								'media' : 'twitter', 
								'shareLink' : 'https://twitter.com/home?status=' + shareLink
							},{
								'media' : 'whatsapp',
								'shareLink' : 'whatsapp://send?text=' + absUrl
							},{
							 	'media' : 'envelope',
							 	'shareLink' : 'mailto:?&subject=[lokayat india] ' + newsTitle + '&body=' + shareLink 
							}
						];

};

angular.module('lokytControllers')
	.component('socialShare', {
		templateUrl: 'scripts/components/social-share.html',
		controller : socialShareController	
	});