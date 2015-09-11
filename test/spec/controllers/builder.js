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
            return $q.when({});
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
});
