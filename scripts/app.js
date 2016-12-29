// app.js
var lokayat = angular.module('lokayat', [
    'ngRoute',
    'lokytControllers',
    'pubController',
    'lokytDirective',
    'lokytFactory'
  ]);


// configure our routes
lokayat.config(function($routeProvider) {
    $routeProvider
        // route for the home page
        .when('/', {
            templateUrl : 'scripts/directives/home/home.html',
            controller  : 'mainController',
            activeTab : 'home'
        })
        // route for the about page
        .when('/campaigns', {
            templateUrl : 'scripts/directives/campaigns/campaigns.html',
            controller  : 'campaignsCtrl',
            activeTab : 'campaigns'
        })
        .when('/campaigns/:campaign', {
            templateUrl : 'scripts/directives/campaigns/campaignpage.html',
            controller  : 'campaignPageCtrl',
            activeTab : 'campaigns'
        })
        .when('/news', {
            templateUrl : 'scripts/news/news.html',
            controller  : 'news',
            activeTab : ''
        })
        .when('/news/:title', {
            templateUrl : 'scripts/news/news-item.html',
            controller  : 'newsItem',
            activeTab : ''
        })
        .when('/publication', {
            templateUrl : 'views/publication.html',
            controller  : 'booksCtrl',
            activeTab : 'publication'
        })
        // route for the contact page
        .when('/media', {
            templateUrl : 'views/media.html',
            controller  : 'mediaCtrl',
            activeTab : 'media'
        })
        .when('/join', {
            templateUrl : 'views/join.html',
            controller  : 'joinCtrl',
            activeTab : 'join'
        })
        .when('/p', {
            templateUrl : 'views/pressR.php',
            controller  : '',
            activeTab : ''
        })
        .when('/inq', {
            templateUrl : 'views/inq.php',
            controller  : '',
            activeTab : ''
        })
        .when('/dashboard', {
            templateUrl : 'views/dashb.php',
            controller  : '',
            activeTab : ''
        })
        .when('/kviff', {
            templateUrl : 'views/kviff2017.html',
            controller  : '',
            activeTab : ''
        })
        .when('/AddEvent', {
            templateUrl : 'views/addEvent.php',
            controller  : '',
            activeTab : ''
        })
        .otherwise({ redirectTo: "/" });
        
           
});

