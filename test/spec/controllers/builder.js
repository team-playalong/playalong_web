'use strict';

describe('Controller: BuilderctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var BuilderctrlCtrl,
    scope,
    chordsMockService,
    $stateParams,
    $q;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,_$q_,_$stateParams_,$httpBackend) {
    $q = _$q_;
    $stateParams = _$stateParams_;
    $stateParams.id = 1;
    chordsMockService = {
      addChord: function() {
        return $q.when({});
      },
      getChordById: function() {
        return {
          $bindTo: function() {
            return $q.when(mockData.getMockChord());
          }
        };
      }
     };
    scope = $rootScope.$new();
    BuilderctrlCtrl = $controller('BuilderCtrl', {
      $scope: scope,
      chords: chordsMockService,
      $stateParams: $stateParams
    });

    //Ignores all html requests
    $httpBackend.whenGET(/views\/.*/).respond();

    scope.addAlert = function() {};
    spyOn(scope,'addAlert');
    $rootScope.$apply();
  }));

  it('should initialize the scope', function () {
    expect(scope).toBeDefined(); 
  });

  it('should support editing existing chord', function() {
    expect(scope.addAlert).toHaveBeenCalledWith('success','You may start editing');
    
  });

  it('should get the appopriate text according to the switch mode', function() {
    var res;
    res = scope.getTextByMode();

    expect(res).toBe('Preview');

    scope.isPreviewMode = true;
    res = scope.getTextByMode();
    expect(res).toBe('Edit');
  });

  it('should handle switching between edit and preview modes', function() {
    spyOn(scope,'scanForChords');
    scope.isPreviewMode = true;
    scope.handleSwitchModes();
    expect(scope.scanForChords).toHaveBeenCalled();
  });
});
