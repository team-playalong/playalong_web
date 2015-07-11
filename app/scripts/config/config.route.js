'use strict';

app.config(
  ['$stateProvider','$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      //////////////////////////
      // State Configurations //
      //////////////////////////

      // Use $stateProvider to configure your states.
      $stateProvider
        .state("home", {
          url: "/",
          templateUrl: '../../views/home.html',
          controller: 'HomeCtrl',
        });

        $urlRouterProvider.otherwise('/');
    }
]);