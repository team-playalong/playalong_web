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
      "jasmine"
    ],

    // list of files / patterns to load in the browser
    files: [
      //Conf
      'app/env.js',

      // bower:js
      'bower_components/jquery/dist/jquery.js',
      'bower_components/angular/angular.js',
      'bower_components/bootstrap-sass/assets/javascripts/bootstrap.js',
      'bower_components/angular-animate/angular-animate.js',
      'bower_components/angular-aria/angular-aria.js',
      'bower_components/angular-material/angular-material.js',
      'bower_components/angular-ui-router/release/angular-ui-router.js',
      'bower_components/angular-material-icons/angular-material-icons.min.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'bower_components/firebase/firebase.js',
      'bower_components/angularfire/dist/angularfire.js',
      'bower_components/angular-translate/angular-translate.js',
      'bower_components/angular-translate-loader-static-files/angular-translate-loader-static-files.js',
      'bower_components/angular-sanitize/angular-sanitize.js',
      'bower_components/angular-translate-loader-url/angular-translate-loader-url.js',
      'bower_components/messageformat/messageformat.js',
      'bower_components/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.js',
      'bower_components/playalong.services/dist/scripts/scripts.js',
      'bower_components/angular-bootstrap/ui-bootstrap-tpls.js',
      'bower_components/rangy/rangy-core.js',
      'bower_components/rangy/rangy-classapplier.js',
      'bower_components/rangy/rangy-highlighter.js',
      'bower_components/rangy/rangy-selectionsaverestore.js',
      'bower_components/rangy/rangy-serializer.js',
      'bower_components/rangy/rangy-textrange.js',
      'bower_components/textAngular/dist/textAngular.js',
      'bower_components/textAngular/dist/textAngular-sanitize.js',
      'bower_components/textAngular/dist/textAngularSetup.js',
      'bower_components/jquery-ui/jquery-ui.js',
      'bower_components/angular-dragdrop/src/angular-dragdrop.js',
      'bower_components/raphael/raphael.js',
      'bower_components/justgage-bower/justgage.js',
      'bower_components/angular-gage/dist/angular-gage.js',
      'bower_components/angular-mocks/angular-mocks.js',
      // endbower
      
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

      'app/pages/tuner/tuner.controller.js',

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
