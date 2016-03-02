'use strict';
describe('Controller: HomeCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var HomeCtrl,
		  scope,
		  chordsMockService;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$q,_$httpBackend_) {
    $rootScope.startSpin = function() {};

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
    
    //Ignores all html requests
    _$httpBackend_.whenGET(/views\/.*/).respond();
    _$httpBackend_.whenGET(/i18n/).respond();
    $rootScope.$apply();
  }));

  it('should initialize all components', function() {
  	expect(scope).toBeDefined();
    expect(HomeCtrl.searchByOptions).toBeDefined();
  	expect(HomeCtrl.searchByOptions.length).toBe(2);

  	expect(HomeCtrl.searchConfig.searchBy).toBe('title');
  });

  it('should search chords by given input', function() {
  	HomeCtrl.searchChords();
		HomeCtrl.handleChordResults(mockData.getMockChordResults());
		expect(HomeCtrl.searchResults.length).toBe(1);
		expect(HomeCtrl.searchResults[0].artist).toBe('Test Artist');
  });
});
