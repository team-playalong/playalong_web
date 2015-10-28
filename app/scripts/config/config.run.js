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

app.run(["$rootScope", "$state", function($rootScope, $state) {
	$rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
	  // We can catch the error thrown when the $requireAuth promise is rejected
	  // and redirect the user back to the home page
	  if (error === "AUTH_REQUIRED") {
	    $state.go("home");
	  }
	});
}]);