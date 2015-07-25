'use strict';

app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state("home",          { url: "/",               templateUrl: '../../views/home.html',     controller: 'HomeCtrl' })
        .state("chord",         { url: "/chord/:id",      templateUrl: '../../views/chord.html',    controller: 'ChordCtrl' })

        .state('builder',       { url: '/builder',        template: '<div ui-view></div>',          controller: 'BuilderCtrl', abstract: true})
        .state('builder.new',   { url: '/new',            templateUrl: '../../views/builder.html'})
        .state('builder.edit',  { url: '/edit/:id',       templateUrl: '../../views/builder.html'})
      ;

      $urlRouterProvider.otherwise('/');
}]);
