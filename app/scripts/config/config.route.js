'use strict';

app.config(
  ['$stateProvider',
    function ($stateProvider) {
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
          templateUrl: '../../views/main.html'
        });
    }
]);