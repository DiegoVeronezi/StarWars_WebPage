APP.controller('IndexCtrl', function ($scope, $http) {
  $scope.persons = [];
  let x = 0;
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

  // function getCharacters() {
  //   for (let i = 1; i < 5; i++) {
  //     callApiForPeople(i);
  //   }
  // }

  // getCharacters();

});