APP.controller('IndexCtrl', function ($scope, $http) {
  $scope.persons = [];
  $scope.starships = [];
  $scope.planets = [];
  $scope.vehicles = [];
  let x = 0;
  let y = 0;
  let z = 0;
  let k = 0;
  $http({
    method: 'GET',
    url: 'https://swapi.co/api/films/'
    }).then(function successCallback(response) {
      for (let i = 0; i < response.data.results.length; i++) {
        $scope['films' + i] = response.data.results[i];
      }
      console.log($scope.films0);
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
         $scope.persons[x] = response;
         x = x + 1;
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }

  function callApiForStarships(id) {
    $http({
      method: 'GET',
      url: 'https://swapi.co/api/starships/' + id + '/',
      }).then(function successCallback(response) {
         $scope.starships[y] = response;
         y = y + 1;
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }

  function callApiForPlanets(id) {
    $http({
      method: 'GET',
      url: 'https://swapi.co/api/planets/' + id + '/',
      }).then(function successCallback(response) {
         $scope.planets[z] = response;
         z = z + 1;
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }

  function callApiForVehicles(id) {
    $http({
      method: 'GET',
      url: 'https://swapi.co/api/vehicles/' + id + '/',
      }).then(function successCallback(response) {
         $scope.vehicles[k] = response;
         k = k + 1;
         console.log($scope.vehicles[0]);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }

  
  callApiForPeople(1);
  callApiForPeople(2);
  callApiForPeople(3);
  callApiForPeople(4);
  callApiForPeople(5);
  callApiForPeople(6);
  callApiForPeople(7);
  callApiForPeople(8);
  callApiForPeople(9);
  callApiForPeople(10);
  callApiForPeople(12);
  callApiForPeople(13);
  callApiForPeople(14);
  callApiForPeople(15);
  callApiForPeople(16);
  callApiForPeople(18);
  callApiForPeople(19);
  callApiForPeople(81);

  callApiForStarships(2);
  callApiForStarships(3);
  callApiForStarships(5);
  callApiForStarships(9);  
  callApiForStarships(10);
  callApiForStarships(11);
  callApiForStarships(12);
  callApiForStarships(13);

  callApiForPlanets(1);
  callApiForPlanets(2);
  callApiForPlanets(3);

  callApiForVehicles(4);
  callApiForVehicles(6);
  callApiForVehicles(7);
  callApiForVehicles(8);

});