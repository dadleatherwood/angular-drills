angular.module('myApp').controller('myCtrl', function($scope,myService){
  $scope.test = "I am working"
  function getData() {
    myService.getData()
    .then(function(response){
      var people = response.data.results
      $scope.people = people
      console.log(people)
    })

  }
getData()
})
