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
  function callApiForPeople(id) {
    $http({
      method: 'GET',
      url: 'https://swapi.co/api/people/' + id + '/',
      }).then(function successCallback(response) {
        console.log(response);
        $scope['person' + id] = response;
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }
  callApiForPeople(1);
  callApiForPeople(2);
});