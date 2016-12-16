var lFactory = angular.module('lokytFactory', ['ngResource'])
  
lFactory.factory('books', function($http){
    return {
      list: function (callback){
        $http({
          method: 'GET',
          url: 'jsons/books.json',
          cache: true
        }).success(callback);
      }
    };
});

lFactory.factory('bigBooks', function($http){
    return {
      list: function (callback){
        $http({
          method: 'GET',
          url: 'jsons/bigBooks.json',
          cache: true
        }).success(callback);
      }
    };
});

lFactory.factory('Campaign', ['$resource',
  function($resource){
    return $resource('jsons/:campaignID.json', {}, {
      query: {method:'GET', params:{campaignID:'education'}, isArray:true}
    });
  }]);
