'use strict';
 /*jshint unused:false*/

describe('Directive: autoscrollWidget', function () {

  // load the directive's module
  beforeEach(module('playalongWebApp'));

  var element,
    scope,
		$compile;

  beforeEach(inject(function ($rootScope,_$compile_,$httpBackend) {
    scope = $rootScope.$new();
    $compile = _$compile_;

    //Ignores all html requests
    $httpBackend.whenGET(/views\/.*/).respond();
  }));

  it('should initialize an autoscroll widget html to the page', function() {
  	var html = '<autoscroll-widget speed="autoscrollSpeed" enabled="{{autoscrollEnabled}}"></autoscroll-widget>';
  	var compiled = $compile(html)(scope);
  	scope.$apply();
    dumper(compiled);
  	expect(compiled).toBeDefined();
	});  
});
