'use strict';

describe('Controller: BuilderctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var BuilderctrlCtrl,
    scope,
    chordsMockService,
    $q;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$q_) {
    $q = _$q_;
    chordsMockService = {
      addChord: function() {
        return $q.when({});
      }
     };
    scope = $rootScope.$new();
    BuilderctrlCtrl = $controller('BuilderCtrl', {
      $scope: scope,
      chords: chordsMockService
    });
  }));

  it('should initialize the scope', function () {
    expect(scope).toBeDefined(); 
    expect(scope.createChordInDb).toBeDefined();
  });
});
