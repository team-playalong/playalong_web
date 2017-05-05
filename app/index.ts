import 'angular';
import 'angular-material';
import 'angular-ui-router';
import 'angularfire';
import 'angular-translate';
import 'textangular';
import 'textAngular/dist/textAngular-sanitize';
import 'angular-translate-interpolation-messageformat';
import 'angular-translate-loader-static-files';
import 'angular-material-icons';
import 'angular-bootstrap';

// Modules
import './components/ply-sidebar/ply-sidebar.component';
import './pages/home/home';
import './components/ply-form-elements/ply-form-elements.module';
import './pages/chord';

// CSS
import 'angular-material/angular-material.css';
import 'angular-material-icons/angular-material-icons.css';
import 'font-awesome/css/font-awesome.css';

import '../assets/styles/main.scss';

// Config
import RouteConfig from './scripts/config/config.route';
import configThemes from './scripts/config/config.themes';
import { wysiwygConfig, translateConfig } from './scripts/config/config.run';
import { Facebook, paths } from './scripts/config/config.constants';
import config from './scripts/config/config';

// Controllers
import main from './scripts/controllers/main';
import loginCtrl from './scripts/controllers/login';

// Components
import ChordResult from './components/chord-result/chord-result.component';
import plyAvatarMenu from './components/avatar-menu/ply-avatar-menu.component';

// Directives
import plyspinner from './components/ply-spinner/plyspinner';

// Services
import PlyFirebase from './services/PlyFirebase.service';
import customerIoHelper from './services/customeriohelper';
import loginSrv from './services/login.service';
import chords from './services/chords.service';
import Toast from './services/toast';
import PlyNotifier from './services/ply-notifier.service';
import RegexStore from './services/regexstore';
import PlyStorage from './services/plyStorage.service';
import Common from './services/common';
import PlyTooltip from './services/plytooltip';

angular.module('playalongWebApp', [
  'ngMaterial',
  'ui.router',
  'firebase',
  'pascalprecht.translate',
  'textAngular',
  'PlySidebar',
  'PlyHome',
  'PlyChord',
  'plyFormElements',
  'ngMdIcons',
  'ui.bootstrap',
  'ngAnimate',

  // 'ngDragDrop',
  // 'frapontillo.gage',
  // 'textSizeSlider',
  // 'MetronomeApp',

  // 'LocalStorageModule',
  // 'plyYoutube',
])
.component('chordResult', ChordResult)
.component('plyAvatarMenu', plyAvatarMenu)
.directive('plyspinner', plyspinner)
.controller('MainCtrl', main)
.controller('LoginCtrl', loginCtrl)
.service('PlyFirebase', PlyFirebase)
.service('PlyStorage', PlyStorage)
.service('RegexStore', RegexStore)
.service('Toast', Toast)
.service('login', loginSrv)
.service('customerIoHelper', customerIoHelper)
.service('chords', chords)
.service('Common', Common)
.service('PlyNotifier', PlyNotifier)
.service('PlyTooltip', PlyTooltip)
.constant('paths', paths)
.constant('Facebook', Facebook)
.constant('config', config)
.config(RouteConfig)
.config(configThemes)
.config(wysiwygConfig)
.config(translateConfig)
.run(['paths', 'Facebook', '$rootScope',
	function (paths, Facebook, $rootScope) {
	$rootScope.paths = paths;
	$rootScope.Facebook = Facebook;
}]);
;
