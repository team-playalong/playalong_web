autoscroll.$inject = ['$window', '$interval'];
  function autoscroll($window, $interval) {
    return {
      bindToController: true,
      restrict: 'A',
      scope:  {
        speed: '@?',
      },
      controller: 'AutoscrollCtrl',
      controllerAs: 'vm',
      link(scope, element, attrs, $ctrl) {
        scope.$watch(function() {
          return $ctrl.speed;
        }, function() {
          $ctrl.updateInterval();
        });
      },
    };
  }

AutoscrollCtrl.$inject = ['$interval', '$window', '$state'];
function AutoscrollCtrl($interval, $window, $state) {
  const vm = this;

  let newInterval;
  vm.config = {
    bottomSpeed: 1,
    topSpeed: 2,
    baseInterval: 80,
    maxSpeed: 5,
    minSpeed: 0,
  };
  // Fallback and make sure its between min-max
  vm.speed = Math.min(vm.speed || vm.config.minSpeed, vm.config.maxSpeed);
  vm.stateName = $state.current.name;
  vm.normalizeSpeed = function() {
    const base = vm.config.bottomSpeed;
    const offset = (vm.speed - base) / (vm.config.maxSpeed - vm.config.minSpeed);
    return base + offset;
  };

  vm.updateInterval = function() {
    const normalizedSpeed = vm.normalizeSpeed();
    if (vm.plyInterval) {
      $interval.cancel(vm.plyInterval);
    }
    newInterval = vm.config.baseInterval * (1 / normalizedSpeed);
    vm.plyInterval = $interval(function() {
      if (vm.speed > 0 && $state.current.name === vm.stateName) {
        $window.scrollBy(0, 1);
      }
      else {
        $interval.cancel(vm.plyInterval);
      }
    }, newInterval, 0/*infinite*/, false/*no apply*/); // tslint:disable-line
  };
}

export { autoscroll, AutoscrollCtrl } ;