'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('MainCtrl', ['$scope', '$timeout', '$mdSidenav', '$mdUtil', '$log', 'paths', '$state','login','$rootScope',
                  function ($scope, $timeout, $mdSidenav, $mdUtil, $log, paths,$state, login,$rootScope) {
  $scope.initCtrl = function() {
    $scope.paths = paths;
    $scope.user = login.getUser();
    $scope.toggleLeft = buildToggler('plySidenav');
    $scope.allAlerts = [];
    $scope.mainCtrlConfig = {
      alertTimeout: 3000
    };
  };

  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildToggler(navId) {
    var debounceFn =  $mdUtil.debounce(function(){
          $mdSidenav(navId)
            .toggle()
            .then(function () {
              $(".ply-main-container").toggleClass("sidebar-open");
            });
        },100);
    return debounceFn;
  }

  $scope.closeAlert = function(index) {
    $scope.allAlerts.splice(index, 1);
  };
  $scope.goToChordPage = function(chord) {
    $scope.chord = chord;
    $state.go('chord',{chordKey: chord.chordKey || chord.$id });
  };
  
  $rootScope.startSpin = function() {
    $scope.$broadcast('startSpin');
  };
  $rootScope.stopSpin = function() {
    $scope.$broadcast('stopSpin');
  };

  $scope.initCtrl();
}]);