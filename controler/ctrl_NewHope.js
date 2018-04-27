APP.controller('IndexCtrl', function ($scope, $http) {
  $http({
    method: 'GET',
    url: 'https://swapi.co/api/films/1/?format=json'
    }).then(function successCallback(response) {
      console.log(response);
      $scope.film1 = response;
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });	
  $http({
    method: 'GET',
    url: 'https://swapi.co/api/people/1/'
    }).then(function successCallback(response) {
      console.log(response);
      $scope.person1 = response;
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });
  $http({
    method: 'GET',
    url: 'https://swapi.co/api/people/4/?format=json'
    }).then(function successCallback(response) {
      console.log(response);
      $scope.person2 = response;
      // this callback will be called asynchronously
      // when the response is available
    }, function errorCallback(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
    });	  	  			
});	