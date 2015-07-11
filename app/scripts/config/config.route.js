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
        })
        .state("chord", {
          url: "/chord/:id",
          templateUrl: '../../views/chord.html',
          controller: 'ChordCtrl',
        });

        $urlRouterProvider.otherwise('/');
    }
]);