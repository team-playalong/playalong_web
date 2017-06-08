import './config/config.constants';

function MainCtrl($scope, $timeout, $mdSidenav, $mdUtil, paths, $state, login, $rootScope) {
  $scope.Math = Math;
  $scope.initCtrl = function() {
    if (!!window.mixpanel) {
      window.mixpanel.track('ply_page_load');
    }

    $rootScope.paths = paths;
    $scope.user = login.getUser();
    $rootScope.toggleSidebar = $scope.buildToggler('left');
    $scope.mainCtrlConfig = {
      alertTimeout: 3000,
    };
  };

  /**
   * Build handler to open/close a SideNav; when animation finishes
   * report completion in console
   */
  $scope.buildToggler = navId => {
    const debounceFn = $mdUtil.debounce(function(){
      $mdSidenav(navId)
        .toggle()
        .then(function () {
          $('.ply-main-container').toggleClass('sidebar-open');
        });
    }, 0);
    return debounceFn;
  };

  $rootScope.goToChordPage = function(chord) {
    if (typeof chord === 'object') {
      $scope.chord = chord;
      $state.go('chord', { chordKey: chord.chordKey || chord.$id });
    }
    else if (typeof chord === 'string') {
      $state.go('chord', { chordKey: chord });
    }

  };

  $rootScope.startSpin = function(eventName) {
    $scope.$broadcast(eventName || 'startSpin');
  };
  $rootScope.stopSpin = function(eventName) {
    $scope.$broadcast(eventName || 'stopSpin');
  };

  $rootScope.$on('plyUserLoggedIn', (scope, data) => {
    if (window.ga && data && data.uid) {
      window.ga('set', 'userId', `data.uid_${data.firstName}_${data.lastName}`); // Set the user ID using signed-in user_id.
    }
  });

  $scope.initCtrl();
}
MainCtrl.$inject = [
    '$scope', '$timeout', '$mdSidenav', '$mdUtil',
    'paths', '$state', 'login', '$rootScope',
  ];

export default MainCtrl;
