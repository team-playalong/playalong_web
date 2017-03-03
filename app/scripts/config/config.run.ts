(function() {
  'use strict';
  app.config(['$provide', function ($provide) {
    // this demonstrates how to register a new tool and add it to the default toolbar
    $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) { // $delegate is the taOptions we are decorating
        taOptions.toolbar = [
          ['bold', 'italics', 'underline', 'redo', 'undo'],
          ['justifyLeft', 'justifyCenter', 'justifyRight'],
          ['html'],
        ];
        return taOptions;
    }]);
  }]);

  app.config(function (localStorageServiceProvider) {
    localStorageServiceProvider
      .setPrefix('ply');
  });


  app.run(['$rootScope', '$state' , '$window', function($rootScope, $state, $window) {
    $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
      // We can catch the error thrown when the $requireAuth promise is rejected
      // and redirect the user back to the home page
      if (error === 'AUTH_REQUIRED') {
        $state.go('home');
      }
    });
  /*jshint unused:false*/
    $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, error) {
      //Scroll to the top of the page
      $window.scrollTo(0, 0);

      if (toState.data && toState.data.title) {
        $rootScope.pageTitle = 'Playalong - ' + toState.data.title;
      }
      else {
        $rootScope.pageTitle = 'Playalong - Amazing Chords';
      }

      if (window.ga) {
        window.ga('set', 'page', toState.name);
      }

    });
  }]);

  //Allow unafe html binding
  //TODO - refactor into whitelist
  app.config(function($sceProvider) {
    // Completely disable SCE.  For demonstration purposes only!
    // Do not use in new projects.
    $sceProvider.enabled(false);
  });

  app.config(['$uibTooltipProvider', function($uibTooltipProvider) {
    $uibTooltipProvider.options({
        appendToBody: true,
    });
  }]);

  app.run(
    [          '$rootScope', '$state', '$stateParams',
      function ($rootScope,   $state,   $stateParams) {

      // It's very handy to add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your applications.For example,
      // <li ng-class='{ active: $state.include s('contacts.list') }'> will set the <li>
      // to active whenever 'contacts.list' or one of its decendents is active.
      $rootScope.$state = $state;
      $rootScope.$stateParams = $stateParams;
    },
  ],
  );


})();
