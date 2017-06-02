angular.module('myApp').service('myService',function($http){
  this.getData = function(){
    return $http.get("https://randomuser.me/api/")
  }
})
