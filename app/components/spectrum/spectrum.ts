/*
  eslint no-var-keyword: "off"
*/

'use strict';

/**
 * @ngdoc directive
 * @name guitarTunerAppApp.directive:spectrum
 * @description
 * # spectrum
 */
angular.module('playalongWebApp')
  .directive('spectrum', function ($window) {
    return {
      templateUrl: 'components/spectrum/spectrum.html',
      restrict: 'EA',
      scope: {
        spectrumData: '=spectrumData',
      },
      link: function postLink(scope: any, element, attrs: any) {
        // styles
        scope.stapleStyle = [];
        scope.stapleWrapStyle = '';

        const wrapElementWidth: any = element[0].firstChild;
        const indexStapleWidth = 25;
        let stpl = 0;
        let sum = 0;
        let stapleWidth;

        // from spectrum element attrs
        scope.maxFreq = typeof attrs.minFreq !== 'undefined' ? attrs.maxFreq : 2000;
        scope.minFreq = typeof attrs.minFreq !== 'undefined' ? attrs.minFreq : 0;
        scope.middleFreq = scope.maxFreq / 2;
        scope.stapleAverageAmp = [];

        scope.updateStaple = function(staple){
          sum = 0;
          stpl = 0;
          // set average of staples and number of staples
          for (let i = 7; i < scope.maxFreq; i++) {
            sum += scope.spectrumData[i];
            if (i % indexStapleWidth === 0 && i < scope.maxFreq) {
              scope.stapleAverageAmp[stpl] = ((sum / indexStapleWidth));
              sum = 0;
              stpl++;
            }
          }
          // calculate staple style
          if (wrapElementWidth.clientWidth > $window.innerWidth) {
            stapleWidth = RoundToDecimal($window.innerWidth / stpl, 2);
          }
          else {
            stapleWidth = RoundToDecimal(wrapElementWidth.clientWidth / stpl, 2);
          }

          // set wrapper style staple,
          scope.stapleWrapStyle = {
            width : '' + stapleWidth + 'px',
          };
          // set the height and width of staple
          for (let i = 0; i < scope.stapleAverageAmp.length; i++) {
            let heightInPx = 35 * scope.stapleAverageAmp[i];
            if (heightInPx > 200) {
              heightInPx = 200;
            }

            // staple style
            scope.stapleStyle[i] = {
              height : '' + heightInPx + 'px' ,
              width  : '' + (stapleWidth - 1) + 'px',
            };
          }
        };
        // watch data
        scope.$watchCollection('spectrumData', function() {
            scope.updateStaple();
        });

    function RoundToDecimal(num, decimal) {
      let zeros = '' + 1.0.toFixed(decimal);
      zeros = zeros.substr(2);
      const mul_div = parseInt('1' + zeros, 10);
      const increment = parseFloat('.' + zeros + '01');
      if (((num * (mul_div * 10)) % 10) >= 5) {
        num += increment;
      }
      return Math.round((num * mul_div) - 0.5) / mul_div;
    }
  },
 };
});
