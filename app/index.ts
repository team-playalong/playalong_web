import 'angular';
import 'angular-material';
import 'angular-ui-router';
import 'angularfire';
import 'angular-translate';

// Modules
import './components/ply-sidebar/ply-sidebar.component';

// Config
import RouteConfig from './scripts/config/config.route';

// Controllers
import main from './scripts/controllers/main';
import loginCtrl from './scripts/controllers/login';

// Components
import ChordResult from './components/chord-result/chord-result.component';

import PlyFirebase from './services/PlyFirebase.service';
import customerIoHelper from './services/customeriohelper';

import loginSrv from './services/login.service';

import { Facebook, paths } from './scripts/config/config.constants';
import config from './scripts/config/config';

angular.module('playalongWebApp', [
  'ngMaterial',
  'ui.router',
  'firebase',
  'pascalprecht.translate',

  'PlySidebar',

  // 'ngMdIcons',

  // 'ngAnimate',
  // 'ui.bootstrap',
  // 'textAngular',
  // 'ngDragDrop',
  // 'frapontillo.gage',
  // 'textSizeSlider',
  // 'MetronomeApp',
  // 'plyFormElements',
  // 'LocalStorageModule',
  // 'plyYoutube',
])
.component('ChordResult', ChordResult)
.controller('MainCtrl', main)
.controller('LoginCtrl', loginCtrl)
.service('PlyFirebase', PlyFirebase)
.service('login', loginSrv)
.service('customerIoHelper', customerIoHelper)
.constant('paths', paths)
.constant('Facebook', Facebook)
.constant('config', config)
.config(RouteConfig)
.run(['paths', 'Facebook', '$rootScope',
	function (paths, Facebook, $rootScope) {
	$rootScope.paths = paths;
	$rootScope.Facebook = Facebook;
}]);
