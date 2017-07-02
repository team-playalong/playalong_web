import * as angular from 'angular';

import PlyStorage from './plyStorage.service';

angular.module('PlyUtils', [])
.service('PlyStorage', PlyStorage);
