'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('MainCtrl', ['$scope', '$timeout', '$mdSidenav', '$mdUtil', '$log', 'paths', '$state','login',
                  function ($scope, $timeout, $mdSidenav, $mdUtil, $log, paths,$state, login) {
  $scope.initCtrl = function() {
    $scope.paths = paths;
    $scope.user = login.getUser();
    $scope.toggleLeft = buildToggler('left');
    $scope.allAlerts = [];
    $scope.mainCtrlConfig = {
      alertTimeout: 3000
    };
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
    var alert = {
      type: type,
      msg: message
    };
    $scope.allAlerts.push(alert);

    $timeout(function(){
        $scope.allAlerts.splice($scope.allAlerts.indexOf(alert), 1);
    }, $scope.mainCtrlConfig.alertTimeout,false);

  };
  $scope.closeAlert = function(index) {
    $scope.allAlerts.splice(index, 1);
  };
  $scope.goToChordPage = function(chord) {
    $scope.chord = chord;
    $state.go('chord',{chordKey: chord.chordKey});
  };
  
  $scope.initCtrl();
}]);