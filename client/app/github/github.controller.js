'use strict';

angular.module('githubApp')
  .controller('githubRepos', function ($scope, $http) {
    // form submit function
    $scope.load = false;
    $scope.getGithubRepos = function () {
      $http.get("https://api.github.com/users/" + $scope.userName + "/repos")
        .then(function (response) {
          if(response.data.length>0){
            $scope.load = true;
            $scope.results = response.data
          }else{
            alert("No record found")
            $scope.load = false;
          }
        }).catch(function(e){
          alert("User " + e.statusText)
          $scope.load = false;
      });
    };
  });