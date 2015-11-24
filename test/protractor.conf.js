exports.config = {
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  specs: ['E2E/**/*.e2e.spec.js'],
  framework: 'jasmine2'
};