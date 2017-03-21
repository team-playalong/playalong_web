'use strict';

describe('Controller: ChordCtrl', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  let scope;
  let $q;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _$httpBackend_, _$q_) {
    $q = _$q_;
    $rootScope.chord = mockData.getMockChord();
    scope = $rootScope.$new();
    scope.chord = mockData.getMockChord();
    $controller('ChordCtrl', {
      $scope: scope,
      chords: {
        rateChord: function() {
          return $q.when({});
        },
        increaseChordHitCount: function() {
          return $q.when({});
        },
      },
      $stateParams: {
        chordKey: 1,
      },
    });

    //Ignores all html requests
    _$httpBackend_.whenGET(/views\/.*/).respond();
    _$httpBackend_.whenGET(/i18n/).respond();
    scope.addAlert = function() {};
    spyOn(scope, 'addAlert');
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
