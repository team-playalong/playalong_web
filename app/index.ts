import 'angular';
import 'angular-material';
import 'angular-ui-router';
import 'angularfire';

import main from './scripts/controllers/main';
import loginCtrl from './scripts/controllers/login';

import PlyFirebase from './services/PlyFirebase.service';
import loginSrv from './services/login.service';

import { Facebook, paths } from './scripts/config/config.constants';
import config from './scripts/config/config';

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
  'firebase',
  // 'ngMdIcons',

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
.controller('LoginCtrl', loginCtrl)
.service('PlyFirebase', PlyFirebase)
.service('login', loginSrv)
.constant('paths', paths)
.constant('Facebook', Facebook)
.constant('config', config)
.run(['paths', 'Facebook', '$rootScope',
	function (paths, Facebook, $rootScope) {
	$rootScope.paths = paths;
	$rootScope.Facebook = Facebook;
}]);
