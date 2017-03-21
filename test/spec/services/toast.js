'use strict';

describe('Service: toast', function () {

  // load the service's module
  beforeEach(module('playalongWebApp'));

  // instantiate service
  let toast;
  let $translate;

  beforeEach(inject(function (_Toast_) {
    toast = _Toast_;
    $translate = function(args) {
      $translate.spy.apply(this, ...args);
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
