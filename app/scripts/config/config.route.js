'use strict';

app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state("home",      { url: "/",               templateUrl: '../../views/home.html',     controller: 'HomeCtrl' })
        .state("chord",     { url: "/chord/:id",      templateUrl: '../../views/chord.html',    controller: 'ChordCtrl' })
        .state('builder',   { url: '/builder',        templateUrl: '../../views/builder.html',  controller: 'BuilderCtrl'})
      ;

      $urlRouterProvider.otherwise('/');
}]);
