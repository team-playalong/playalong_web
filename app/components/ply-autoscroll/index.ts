import 'raphael';
import 'justgage/justgage.js';
import 'angular-gage/dist/angular-gage.js';

// <script src="node_modules/angular-gage/dist/angular-gage.js"></script>

import autoscrollWidget from './autoscroll-widget';
import { autoscroll, AutoscrollCtrl } from './autoscroll';

angular.module('PlyAutoscroll', [
  'frapontillo.gage',
])
.directive('autoscroll', autoscroll)
.controller('AutoscrollCtrl', AutoscrollCtrl)
.directive('autoscrollWidget', autoscrollWidget);
