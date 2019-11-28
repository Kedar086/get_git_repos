'use strict';

angular.module('githubApp', [
  'ui.router'
])
  
  .config(function ( $urlRouterProvider, $locationProvider, $qProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
    $qProvider.errorOnUnhandledRejections(false);
  })
