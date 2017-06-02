angular.module('arrayApp').controller('arrayController', function($scope,arrayService){
  $scope.contacts = arrayService.getContacts()
  $scope.test = "I'm working!"
})
