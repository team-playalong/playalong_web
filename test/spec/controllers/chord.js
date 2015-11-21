'use strict';

describe('Controller: ChordCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var 	ChordCtrl,
		    scope,
        $q;

// Initialize the controller and a mock scope
beforeEach(inject(function ($controller, $rootScope,$httpBackend,_$q_) {
  $q = _$q_;  
	$rootScope.chord = window.mockData.getMockChord();
  	scope = $rootScope.$new();
    scope.chord = mockData.getMockChord();
    ChordCtrl = $controller('ChordCtrl', {
      $scope: scope,
      chords: {
        rateChord: function() {
          return $q.when({});
        },
        increaseChordHitCount: function() {
          return $q.when({});
        }
      },
      $stateParams: {
        chordKey: 1
      }
    });

    //Ignores all html requests
    $httpBackend.whenGET(/views\/.*/).respond();

    scope.addAlert = function() {};
    spyOn(scope,'addAlert');
    $rootScope.$apply();
}));

  it('should initialize all components', function() {
  	expect(scope).toBeDefined();
  	expect(scope.currPage).toBe('Test Artist - Test Title');
  	expect(scope.chordRating).toBe(1);

  	expect(scope.chordFab).toBeDefined();
  	expect(scope.chordFab.selectedMode).toBe('md-fling');
  });

  
});
