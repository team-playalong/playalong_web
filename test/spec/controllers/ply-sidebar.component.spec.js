(function() {
	'use strict';

	describe('Controller: SidebarCtrl', function () {

	  // load the controller's module
	  beforeEach(module('playalongWebApp'));

	  var SidebarCtrl;
	  var res;
	  var login;

	  // Initialize the controller and a mock scope
	  beforeEach(inject(function ($controller, _login_) {
	    login = _login_;
	    SidebarCtrl = $controller('SidebarCtrl', {
	      // place here mocked dependencies
	    });

	  }));

	  it('should decide whether to show a menu item', function() {
	  	res = SidebarCtrl.showMenuItem();
	  	expect(res).toBe(true);

	  	spyOn(login, 'isSuperUser').and.returnValue(false);
	  	res = SidebarCtrl.showMenuItem({ isAdmin: true });
	  	expect(res).toBe(false);
	  });
	});
	
})();
