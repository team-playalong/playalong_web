'use strict';

describe('Service: toast', function () {

  // load the service's module
  beforeEach(module('playalongWebApp'));

  // instantiate service
  var toast;
  beforeEach(inject(function (_toast_) {
    toast = _toast_;
  }));

  it('should do show a toast', function () {
    toast.showSimpleToast();
  });

});
