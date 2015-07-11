'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('MainCtrl', ['$scope', '$timeout', '$mdSidenav', '$mdUtil', '$log', 'paths',
                  function ($scope, $timeout, $mdSidenav, $mdUtil, $log, paths) {
  $scope.paths = paths;

  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildToggler(navID) {
    var debounceFn =  $mdUtil.debounce(function(){
          $mdSidenav(navID)
            .toggle()
            .then(function () {
              $(".ply-main-container").toggleClass("sidebar-open");
            });
        },100);
    return debounceFn;
  }

  $scope.toggleLeft = buildToggler('left');

}]);