// Karma configuration
// http://karma-runner.github.io/0.12/config/configuration-file.html
// Generated on 2015-07-04 using
// generator-karma 1.0.0

module.exports = function(config) {
  'use strict';

  config.set({
    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // base path, that will be used to resolve files and exclude
    basePath: '../',

    // testing framework to use (jasmine/mocha/qunit/...)
    // as well as any additional frameworks (requirejs/chai/sinon/...)
    frameworks: [
      'jasmine',
    ],

    // list of files / patterns to load in the browser
    files: [

      'node_modules/babel-polyfill/dist/polyfill.js',

      //Conf
      'app/env.js',

      'node_modules/angular/angular.js',
      'bower_components/jquery/dist/jquery.js',
      'node_modules/angular-animate/angular-animate.js',
      'node_modules/angular-aria/angular-aria.js',
      'node_modules/angular-material/angular-material.js',
      'node_modules/angular-ui-router/release/angular-ui-router.js',
      'node_modules/bootstrap/dist/js/bootstrap.js',
      'node_modules/angular-translate/dist/angular-translate.js',
      'node_modules/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'node_modules/angular-sanitize/angular-sanitize.js',
      'node_modules/angular-translate-loader-url/angular-translate-loader-url.js',
      'bower_components/messageformat/messageformat.js',
      'node_modules/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js',
      'node_modules/firebase/firebase.js',
      'node_modules/angularfire/dist/angularfire.js',
      'node_modules/playalong-services/dist/scripts/scripts.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'node_modules/rangy/lib/rangy-core.js',
      'node_modules/rangy/lib/rangy-classapplier.js',
      'node_modules/rangy/lib/rangy-highlighter.js',
      'node_modules/rangy/lib/rangy-selectionsaverestore.js',
      'node_modules/rangy/lib/rangy-serializer.js',
      'node_modules/rangy/lib/rangy-textrange.js',
      'node_modules/textangular/dist/textAngular.js',
      'node_modules/textangular/dist/textAngular-sanitize.js',
      'node_modules/textangular/dist/textAngularSetup.js',
      'node_modules/json3/lib/json3.js',
      'node_modules/es5-shim/es5-shim.js',
      'node_modules/angular-resource/angular-resource.js',
      'node_modules/angular-local-storage/dist/angular-local-storage.js',
      'node_modules/angular-cookies/angular-cookies.js',
      'node_modules/angular-touch/angular-touch.js',
      'node_modules/angular-route/angular-route.js',
      'bower_components/jquery-ui/jquery-ui.js',
      'node_modules/angular-dragdrop/src/angular-dragdrop.js',
      'node_modules/justgage/raphael-2.1.4.min.js',
      'node_modules/justgage/justgage.js',
      'node_modules/angular-gage/dist/angular-gage.js',
      'node_modules/angular-material-icons/angular-material-icons.min.js',
      'node_modules/angular-mocks/angular-mocks.js',

      //Tuner
      'app/pages/tuner/AudioContextMonkeyPatch.js',
      'app/pages/tuner/dsp.js',

      //Metronome
      'app/components/metronome/buzz.min.js',
      'app/components/metronome/metronome.module.js',

      //App
      'app/scripts/app.js',
      'app/scripts/config/config.constants.js',
      'app/scripts/config/config.route.js',
      'app/scripts/controllers/*.js',
      'app/scripts/services/*.js',
      'app/scripts/directives/*.js',
      'app/components/**/*.js',
      'app/pages/**/*.js',

      "test/globals.js",
      "test/mock/**/*.js",
      "test/spec/**/*.js",
      "!test/spec/E2E/**/*.js"
    ],

    // list of files / patterns to exclude
    exclude: [
    ],

    // web server port
    port: 8080,

    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera
    // - Safari (only Mac)
    // - PhantomJS
    // - IE (only Windows)
    browsers: [
      "PhantomJS"
      // 'Chrome'
    ],

    // Which plugins to enable
    plugins: [
      "karma-phantomjs-launcher",
      "karma-chrome-launcher",
      "karma-jasmine"
    ],

    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false,

    colors: true,

    // level of logging
    // possible values: LOG_DISABLE || LOG_ERROR || LOG_WARN || LOG_INFO || LOG_DEBUG
    logLevel: config.LOG_INFO,

    // Uncomment the following lines if you are using grunt's server to run the tests
    // proxies: {
    //   '/': 'http://localhost:9000/'
    // },
    // URL root prevent conflicts with the site root
    // urlRoot: '_karma_'
  });
};
