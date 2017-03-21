'use strict';

describe('Controller: TopchordsCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var TopchordsCtrl,
      chordsSrv,
      scope;


  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, $q, _$httpBackend_) {
    $rootScope.startSpin = function() {};
    scope = $rootScope.$new();
    chordsSrv = {
      getTopChords: function() {
        return $q.when(mockData.getMockChordResults());
      },
      getNewestChords: function() {
        return $q.when(mockData.getMockChordResults());
      },
    };
    TopchordsCtrl = $controller('TopchordsCtrl', {
      chords: chordsSrv,
      $scope: scope,
    });

    //Ignores all html requests
    _$httpBackend_.whenGET(/views\/.*/).respond();
    _$httpBackend_.whenGET(/i18n/).respond();
    $rootScope.$apply();
  }));

  it('should initialize all components', function () {
    expect(TopchordsCtrl).toBeDefined();
    expect(TopchordsCtrl.defaultTopLimit).toBeDefined();
  });
});
