'use strict';

/**
 * @ngdoc function
 * @name playalongWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the playalongWebApp
 */
angular.module('playalongWebApp')
  .controller('MainCtrl', function ($scope, $timeout, $mdSidenav, $mdUtil, $log) {
      
  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  function buildToggler(navID) {
    var debounceFn =  $mdUtil.debounce(function(){
          $mdSidenav(navID)
            .toggle()
            .then(function () {
              $log.debug("toggle " + navID + " is done");
            });
        },300);
    return debounceFn;
  }

  $scope.toggleLeft = buildToggler('left');

});