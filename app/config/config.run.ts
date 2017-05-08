import PLY_CONFIG from '../env';

wysiwygConfig.$inject = ['$provide'];
export function wysiwygConfig($provide) {
  // this demonstrates how to register a new tool and add it to the default toolbar
  $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function(taRegisterTool, taOptions) { // $delegate is the taOptions we are decorating
      taOptions.toolbar = [
        ['bold', 'italics', 'underline', 'redo', 'undo'],
        ['justifyLeft', 'justifyCenter', 'justifyRight'],
        ['html'],
      ];
      return taOptions;
  }]);
}

translateConfig.$inject = [
  '$translateProvider', 'config', 'localStorageServiceProvider',

];
export function translateConfig($translateProvider, config, localStorageServiceProvider) {
  const lang = PLY_CONFIG.defaultLocale || 'en';
  $translateProvider
    .addInterpolation('$translateMessageFormatInterpolation')
    .useSanitizeValueStrategy('sanitize')
    .useStaticFilesLoader({
      prefix: config.paths.firebaseProd + 'i18n/',
      suffix: '.json',
    })
    .preferredLanguage(lang);

  localStorageServiceProvider
    .setPrefix('ply');
}

  // Allow unafe html binding
  // TODO - refactor into whitelist
  sceConfig.$inject = ['$sceProvider', '$uibTooltipProvider'];
  export function sceConfig($sceProvider, $uibTooltipProvider) {
    // Completely disable SCE.  For demonstration purposes only!
    // Do not use in new projects.
    $sceProvider.enabled(false);

    $uibTooltipProvider.options({
        appendToBody: true,
    });
  }

runConfig.$inject = [
  '$rootScope', '$state' , '$window', '$stateParams',
  'paths', 'Facebook',
];
export function runConfig($rootScope, $state, $window, $stateParams, paths, Facebook) {
  $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
    // We can catch the error thrown when the $requireAuth promise is rejected
    // and redirect the user back to the home page
    if (error === 'AUTH_REQUIRED') {
      $state.go('home');
    }
  });
  $rootScope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams, error) {
    // Scroll to the top of the page
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

  $rootScope.$state = $state;
  $rootScope.$stateParams = $stateParams;
  $rootScope.paths = paths;
  $rootScope.Facebook = Facebook;
}
