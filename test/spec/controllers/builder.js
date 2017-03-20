describe('Controller: BuilderctrlCtrl', () => {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  let scope;
  let chordsMockService;
  let $stateParams;
  let $q;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$q_, _$stateParams_, _$httpBackend_) {
    $q = _$q_;
    $stateParams = _$stateParams_;
    $stateParams.id = 1;
    chordsMockService = {
      addChord: function() {
        return $q.when({});
      },
      getChordById: () => $q.when({ $bindTo: function() { return $q.when({}); } }),
     };
    scope = $rootScope.$new();
    $controller('BuilderCtrl', {
      $scope: scope,
      chords: chordsMockService,
      $stateParams: $stateParams,
      Toast: {
        showToastByTranslation: function() {},
        showSimpleToast: function() {},

      },
    });

    //Ignores all html requests
    _$httpBackend_.whenGET(/views\/.*/).respond();
    _$httpBackend_.whenGET(/i18n/).respond();
    scope.addAlert = function() {};
    spyOn(scope, 'addAlert');
    $rootScope.$apply();
  }));

  it('should initialize the scope', function () {
    expect(scope).toBeDefined();
  });
});
