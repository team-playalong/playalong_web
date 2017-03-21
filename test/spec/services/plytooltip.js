'use strict';

describe('Service: plyTooltip', function () {

  // load the service's module
  beforeEach(module('playalongWebApp'));

  // instantiate service
  let plyTooltip;
  beforeEach(inject(function (_PlyTooltip_) {
    plyTooltip = _PlyTooltip_;
  }));

  it('should do something', function () {
    expect(!!plyTooltip).toBe(true);
  });

  it('should set a tooltip on an element', function() {
    var res = plyTooltip.setTooltip();
    expect(res).not.toBeDefined();
  });
});
