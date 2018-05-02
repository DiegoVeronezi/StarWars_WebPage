APP.controller('IndexCtrl', function ($scope, $http) {
  $scope.person = [];

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
         
         $scope.person[id] = response;
         console.log($scope.person[1]);
        // this callback will be called asynchronously
        // when the response is available
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
      });
  }

  function getCharacters() {
    for (let i = 1; i < 5; i++) {
      callApiForPeople([i]);     
    }
    
    
  }

  getCharacters();
 
});