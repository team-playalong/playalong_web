'use strict';

describe('Controller: ChordCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var 	ChordCtrl,
		scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
	$rootScope.chord = window.mockData.getMockChord();
  	scope = $rootScope.$new();
    ChordCtrl = $controller('ChordCtrl', {
      $scope: scope
    });
  }));

  it('should initialize all components', function() {
  	expect(scope).toBeDefined();
  	expect(scope.currPage).toBe('Test Artist - Test Title');
  	expect(scope.chordRating).toBe(5);

  	expect(scope.chordFab).toBeDefined();
  	expect(scope.chordFab.selectedMode).toBe('md-fling');
  });
});
