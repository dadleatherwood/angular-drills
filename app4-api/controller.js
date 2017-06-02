angular.module('myApp').controller('myCtrl',function($scope,myService){
  $scope.test = "I am working"
  $scope.getData = function getData(characterFilter) {
    myService.getData(characterFilter)
    .then(function(response){
      var characters = response.data.data.results
      $scope.characters = characters
      console.log(response)
    })
    .catch(function(err) {
      console.log(err)
    })
  }
  $scope.getData();
})
