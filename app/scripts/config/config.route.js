'use strict';

app.config(
  ['$stateProvider','$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      //////////////////////////
      // State Configurations //
      //////////////////////////

      // Use $stateProvider to configure your states.
      $stateProvider

        //////////
        // Home //
        //////////

        .state("home", {

          // Use a url of "/" to set a states as the "index".
          url: "/",
          templateUrl: '../../views/home.html'
        });

        $urlRouterProvider.otherwise('/');
    }
]);