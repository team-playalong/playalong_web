'use strict';
app.config(['$provide', function ($provide) {
	// this demonstrates how to register a new tool and add it to the default toolbar
  $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) { // $delegate is the taOptions we are decorating
      taOptions.toolbar = [
            ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p'],
            ['bold', 'italics', 'underline', 'redo', 'undo'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'indent', 'outdent'],
            ['html']
      ];
      return taOptions;
  }]);
}]);

//Angular-Translate
app.config(function($translateProvider) {
  $translateProvider.useStaticFilesLoader({
      prefix: '/locales/',
      suffix: '.json'
  });
  $translateProvider.useSanitizeValueStrategy('sanitize');
 	// match the default locale from the build task
  $translateProvider.preferredLanguage(PLY_CONFIG.defaultLocale || 'en');
})
.run(function($location, $translate) {
  // split the absolute url based on /
  var splitUrl = $location.absUrl().split('/');
  // check if url contains a certain locale or set back to your default locale
  if (splitUrl.indexOf('he') > -1) 
	{
		$translate.use('he');
	}
  else 
	{
		$translate.use('en');
	}
});



app.run(["$rootScope", "$state" ,'$window', function($rootScope, $state,$window) {
	$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
	  // We can catch the error thrown when the $requireAuth promise is rejected
	  // and redirect the user back to the home page
	  if (error === "AUTH_REQUIRED") {
	    $state.go("home");
	  }
	});
/*jshint unused:false*/
	$rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams, error) {
	  //Scroll to the top of the page
	  $window.scrollTo(0,0);

	  if (toState.data && toState.data.title)
	  {
	  	$rootScope.pageTitle = 'Playalong - ' + toState.data.title;
	  }
	  else
	  {
	  	$rootScope.pageTitle = 'Playalong - Amazing Chords';
	  }
	});
}]);

