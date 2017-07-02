import * as angular from 'angular';
import topchordsCtrl from './topchords';
import { HomeCtrl, PlyHome } from './home';

angular.module('PlyHome', [])
.controller('HomeCtrl', HomeCtrl)
.controller('TopchordsCtrl', topchordsCtrl)
.directive('plyHome', PlyHome);
