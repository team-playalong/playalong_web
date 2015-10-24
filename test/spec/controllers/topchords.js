'use strict';

describe('Controller: TopchordsCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var TopchordsCtrl,
      chordsSrv,
      scope;



  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$q,$httpBackend) {
    $rootScope.startSpin = function() {};
    scope = $rootScope.$new();
    chordsSrv = {
      getTopChords: function() {
        return $q.when(mockData.getMockChordResults());
      }
    };
    TopchordsCtrl = $controller('TopchordsCtrl', {
      chords: chordsSrv,
      $scope: scope
    });

    //Ignores all html requests
    $httpBackend.whenGET(/views\/.*/).respond();
    $rootScope.$apply();
  }));

  it('should initialize all components', function () {
    expect(scope).toBeDefined();
    expect(scope.defaultTopLimit).toBeDefined();
  });

  it('should fetch top chords', function(done) {
    scope.getTopChords(2);

    setTimeout(function() {
      expect(scope.topChords).toBeDefined();
      expect(scope.topChords.length).toBe(1);
      done();  
    },10);
    

  });
});
