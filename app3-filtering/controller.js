angular.module('myApp').controller('myCtrl',function($scope,myService){
  $scope.contacts = myService.getContacts()
  $scope.test = "I am working!"
})
