import topchordsCtrl from './topchords';
import ChordSearchModel from './chord-search.model';
import ChordSearchService from './chord-search.service';
import { HomeCtrl, PlyHome } from './home';


angular.module('PlyHome', [])
.controller('HomeCtrl', HomeCtrl)
.controller('TopchordsCtrl', topchordsCtrl)
.service('ChordSearchModel', ChordSearchModel)
.service('ChordSearchService', ChordSearchService)
.directive('plyHome', PlyHome);
