import 'angular';
import 'angular-material';
import 'angular-ui-router';

import main from './scripts/controllers/main';
import login from './scripts/controllers/login';

import { Facebook, paths } from './scripts/config/config.constants';

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
angular.module('playalongWebApp', [
  'ngMaterial',
  'ui.router',
  // 'ngMdIcons',
  // 'playalong.services',
  // 'ngAnimate',
  // 'ui.bootstrap',
  // 'textAngular',
  // 'ngDragDrop',
  // 'frapontillo.gage',
  // 'pascalprecht.translate',
  // 'textSizeSlider',
  // 'MetronomeApp',
  // 'plyFormElements',
  // 'LocalStorageModule',
  // 'plyYoutube',
])
.controller('MainCtrl', main)
.controller('LoginCtrl', login)
.constant('paths', paths)
.constant('Facebook', Facebook)
.run(['paths', 'Facebook', '$rootScope',
	function (paths, Facebook, $rootScope) {
	$rootScope.paths = paths;
	$rootScope.Facebook = Facebook;
}]);
