'use strict';

/**
 * @ngdoc overview
 * @name playalongWebApp
 * @description
 * # playalongWebApp
 *
 * Main module of the application.
 */

/*jshint -W079 */
var app = angular.module('playalongWebApp', [
  'ngMaterial', 
  'ngMdIcons', 
  'ui.router',
  'playalong.services',
  'ngAnimate',
  'ui.bootstrap',
  'textAngular',
  'ngDragDrop',
  'frapontillo.gage',
  'pascalprecht.translate'
]);

//Allow unafe html binding
//TODO - refactor into whitelist
app.config(function($sceProvider) {
  // Completely disable SCE.  For demonstration purposes only!
  // Do not use in new projects.
  $sceProvider.enabled(false);
});

app.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.include s('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
);

