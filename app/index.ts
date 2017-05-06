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
import './services/ply-utils';
import './components/ply-sidebar/ply-sidebar.component';
import './pages/home/home';
import './components/ply-form-elements/ply-form-elements.module';
import './pages/chord';
import './pages/ply-weekly-chart';
import './pages/builder';
import './pages/favorites';
import './pages/tuner';
import './pages/admin';

// CSS
import 'angular-material/angular-material.css';
import 'angular-material-icons/angular-material-icons.css';
import 'font-awesome/css/font-awesome.css';
import 'textangular/dist/textangular.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'flag-icon-css/css/flag-icon.min.css';

import '../assets/styles/main.scss';

// Config
import RouteConfig from './config/config.route';
import configThemes from './config/config.themes';
import { wysiwygConfig, translateConfig } from './config/config.run';
import { Facebook, paths } from './config/config.constants';
import config from './config/config';

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
import PlyNotifier from './services/ply-notifier.service';



import user from './services/user.service';

angular.module('playalongWebApp', [
  'ngMaterial',
  'ui.router',
  'firebase',
  'pascalprecht.translate',
  'textAngular',
  'PlyUtils',
  'PlySidebar',
  'PlyHome',
  'PlyChord',
  'PlyBuilder',
  'PlyWeeklyChart',
  'PlyFavorites',
  'PlyTuner',
  'PlyAdmin',

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
.service('user', user)
.service('login', loginSrv)
.service('customerIoHelper', customerIoHelper)
.service('chords', chords)

.service('PlyNotifier', PlyNotifier)
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
