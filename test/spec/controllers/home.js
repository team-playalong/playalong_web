'use strict';

describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var HomeCtrl,
		  scope,
		  chordsMockService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$q) {
  	chordsMockService = {
  		searchChordsBy: function() {
  			return $q.when(mockData.getMockChordResults());
  		}
	   };

    scope = $rootScope.$new();
    HomeCtrl = $controller('HomeCtrl', {
      $scope : scope,
      chords: chordsMockService
    });
  }));

  it('should initialize all components', function() {
  	expect(scope).toBeDefined();
  	expect(scope.searchByOptions.length).toBe(2);
  	expect(scope.searchByOptions[0].label).toBe('Song Name');
  	
  	expect(scope.searchConfig.searchBy).toBe('title');
  	expect(scope.searchResults.length).toBe(0);
  });

  it('should search chords by given input', function() {
	  	scope.searchChords();
		scope.handleChordResults(mockData.getMockChordResults());
		expect(scope.searchResults.length).toBe(1);
		expect(scope.searchResults[0].artist).toBe('Test Artist');
  });
  

});
