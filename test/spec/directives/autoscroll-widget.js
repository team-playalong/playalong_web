'use strict';

describe('Directive: autoscrollWidget', function () {

  // load the directive's module
  beforeEach(module('playalongWebApp'));

  let scope;
  let $compile;

  beforeEach(inject(function ($rootScope, _$compile_, _$httpBackend_) {
    scope = $rootScope.$new();
    $compile = _$compile_;

    //Ignores all html requests
    _$httpBackend_.whenGET(/views\/.*/).respond();
    _$httpBackend_.whenGET(/i18n/).respond();

  }));

  it('should initialize an autoscroll widget html to the page', function() {
    var html = '<autoscroll-widget speed="autoscrollSpeed" enabled="{{autoscrollEnabled}}"></autoscroll-widget>';
    var compiled = $compile(html)(scope);
    scope.$apply();
    expect(compiled).toBeDefined();
  });
});
