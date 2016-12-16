angular.module('lokytDirective', [])
    .directive("headpanel", function() {
        return {
            restrict: 'E',
            templateUrl : './scripts/directives/headpanel.html'
        }
    })
    .directive("bottompanel", function() {
        return {
            restrict: 'E',
            templateUrl : './scripts/directives/bottompanel.html'
        }
    });