angular.module('myApp').service('myService',function($http){
  this.getData = function(name){
    // return $http.get("https://gateway.marvel.com:443/v1/public/characters?apikey=c8d3520c83a904c092267fda24892aa5&name=" + name)
    console.log(name)
    return $http.get("https://gateway.marvel.com:443/v1/public/characters?apikey=c8d3520c83a904c092267fda24892aa5&name=" + name)
  }
})
