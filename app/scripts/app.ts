
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
/*jshint unused:false*/
let app = angular.module('playalongWebApp', [
  'ngMaterial', 
  'ngMdIcons', 
  'ui.router',
  'playalong.services',
  'ngAnimate',
  'ui.bootstrap',
  'textAngular',
  'ngDragDrop',
  'frapontillo.gage',
  'pascalprecht.translate',
  'textSizeSlider',
  'MetronomeApp',
  'plyFormElements',
  'LocalStorageModule',
  'plyYoutube',
]);
