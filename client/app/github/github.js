'use strict';

// defining routes here
angular.module('githubApp')
    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function ($stateProvider) {
        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'app/github/github.html'

            })
    }]);