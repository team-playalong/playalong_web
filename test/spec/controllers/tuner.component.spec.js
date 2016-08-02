'use strict';

describe('Component Tuner', function () {

  // load the controller's module
  beforeEach(module('playalongWebApp'));

  var ctrl,
		  scope

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope,$q,_$httpBackend_) {
    scope = $rootScope.$new();
    ctrl = $controller('TunerCtrl', {
      $scope : scope,
    });

    //Ignores all html requests
    _$httpBackend_.whenGET(/views\/.*/).respond();
    _$httpBackend_.whenGET(/i18n/).respond();
    $rootScope.$apply();
  }));

  it('should initialize all components', function() {
    expect(ctrl).toBeDefined();
  });
});
