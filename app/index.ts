// Third Parties
import * as angular from 'angular';
import 'angular-material';
import 'angular-ui-router';
import 'angularfire';
import 'angular-translate';
import 'textangular';
import 'textangular/dist/textAngular-sanitize';
import 'angular-translate-interpolation-messageformat';
import 'angular-translate-loader-static-files';
import 'angular-material-icons';
import 'angular-ui-bootstrap';
import 'angular-local-storage';

// Modules
import './components/ply-toolbar';
import './services/ply-utils';
import './components/ply-sidebar/ply-sidebar.component';
import './components/text-size-slider/angular-text-slider';
import './pages/home';
import './components/ply-form-elements/ply-form-elements.module';
import './pages/chord';
import './pages/ply-weekly-chart';
import './pages/builder';
import './pages/favorites';
import './pages/tuner';
import './pages/admin';

// React
import './react/ply-react.module';

// CSS
import 'angular-material/angular-material.css';
import 'angular-material-icons/angular-material-icons.css';
import 'font-awesome/css/font-awesome.css';
import 'textangular/dist/textAngular.css';
import 'bootstrap/dist/css/bootstrap.css';

import '../assets/styles/main.scss';

// Config
import RouteConfig from './config/config.route';
import configThemes from './config/config.themes';
import { wysiwygConfig, translateConfig, sceConfig, runConfig } from './config/config.run';
import { Facebook, paths } from './config/config.constants';
import config from './config/config';

// Controllers
import main from './main';

// Components
import ChordResult from './components/chord-result/chord-result.component';

// Directives
import plySpinner from './components/ply-spinner/plyspinner';
import plyYoutube from './components/ply-youtube/ply-youtube.module';
import compile from './directives/compile';
import starRating from './directives/star-rating';

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
  'PlyToolbar',
  'PlyUtils',
  'PlySidebar',
  'PlyHome',
  'PlyChord',
  'PlyBuilder',
  'PlyWeeklyChart',
  'PlyFavorites',
  'PlyTuner',
  'PlyAdmin',

  'PlyReact',

  'plyFormElements',
  'ngMdIcons',
  'ui.bootstrap',
  'ngAnimate',
  'LocalStorageModule',
  'textSizeSlider',
  // 'MetronomeApp',
])
.component('chordResult', ChordResult)
.directive('plySpinner', plySpinner)
.directive('starRating', starRating)
.directive('plyYoutube', plyYoutube)
.directive('compile', compile)
.controller('MainCtrl', main)
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
.config(sceConfig)
.run(runConfig);
