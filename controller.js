//sample url: 'https://api.github.com/users/aswani521 /repos'

var app = angular.module('github', []);
app.controller('githubRepos', ['$scope', '$http', function ($scope, $http) {

  $scope.getGithubRepos = function () {
    $http.get("https://api.github.com/users/" + $scope.userName + "/repos")
      .then(function (response) {
        $scope.results = response.data
      });
  };

}]);
