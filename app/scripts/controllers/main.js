'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('MainCtrl', ['$scope', '$timeout', '$mdSidenav', '$mdUtil', '$log', 'paths', '$state',
                  function ($scope, $timeout, $mdSidenav, $mdUtil, $log, paths,$state) {
  $scope.initCtrl = function() {
    $scope.paths = paths;
    $scope.toggleLeft = buildToggler('left');
    $scope.allAlerts = [];
  };

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

  $scope.addAlert = function(type, message) {

    $scope.allAlerts.push({
      type: type,
      msg: message
    });
  };
  $scope.closeAlert = function(index) {
    $scope.allAlerts.splice(index, 1);
  };
  $scope.goToChordPage = function(chord) {
    $scope.chord = chord;
    $state.go('chord');
  };
  
  $scope.initCtrl();
}]);