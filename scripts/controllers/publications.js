angular.module('pubController', [])
  .controller('booksCtrl', function($scope, $http, $anchorScroll, $location, books, bigBooks) {
    books.list(function (books) {
      $scope.books = books; 
    });

    bigBooks.list(function (books) {
      $scope.bigBooks = books; 
    });
    
    $http.get('jsons/books/ramPuniyani.json').success(
        function(data) {
          $scope.ramPuniyani = data
        }
      ).error(function(data) {
        console.log(data);
      });

    $http.get('jsons/books/sulabhaTai.json').success(
        function(data) {
          $scope.sulabhaBrahme = data
        }
      ).error(function(data) {
        console.log(data);
      });  


    $http.get('jsons/books/epub.json').success(
        function(data) {
          $scope.epubs = data
        }
      ).error(function(data) {
        console.log(data);
      });  

  })
  .directive("bookList", function() {
    return {
      restrict : 'E',
      templateUrl : 'scripts/directives/booklist.html'      
    }
  });