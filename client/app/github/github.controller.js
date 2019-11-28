'use strict';

angular.module('githubApp')
  .controller('githubRepos', function ($scope, $http) {
    // form submit function
    $scope.load = false;
    $scope.getGithubRepos = function () {
      $http.get("https://api.github.com/users/" + $scope.userName + "/repos")
        .then(function (response) {
          $scope.load = true;
          $scope.results = response.data
        });
    };
  });