(function() {
'use strict';


angular.module('playalongWebApp')
.directive('plyLanguagePicker', function () {
  return {
    templateUrl: 'views/templates/language-picker-button.html',
    restrict: 'E',
    controller: 'PlylanguagepickerCtrl',
    controllerAs: 'vm',
    bindToController: true
  };
});
})();
