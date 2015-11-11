'use strict';

describe('Service: toast', function () {

  // load the service's module
  beforeEach(module('playalongWebApp'));

  // instantiate service
  var toast,
      $translate;

  beforeEach(inject(function (_toast_) {
    toast = _toast_;
    $translate = function() {
        $translate.spy.apply(this, arguments);
    };
    $translate.spy = function() {};
    spyOn($translate, 'spy').and.returnValue('Dadi');
  }));

  it('should do show a toast', function () {
    toast.showSimpleToast();
  });

  it('should show a toast according to a translation', function() {
    toast.showToastByTranslation('testTranslation');
  });

});
