'use strict';

app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state("home",{ 
          url: "/",
          templateUrl: '../../views/home.html',     
          title: 'Search',
          controller: 'HomeCtrl' 
        })
        .state("chord",         { url: "/chord/",      templateUrl: '../../views/chord.html',    controller: 'ChordCtrl' })
        .state('topChords',  { 
        		url: '/topChords',
            title: 'Top 10 Chords',
        		templateUrl: '../../views/topChords.html',
        		controller: 'TopchordsCtrl'
      	})

        .state('builder',       { url: '/builder',        template: '<div ui-view></div>', abstract: true})
        .state('builder.edit', { 
          url: '/edit/:id',
          templateUrl: '../../views/builder.html',
          controller: 'BuilderCtrl'
        })
        .state('builder.new', { 
          url: '/new',
          templateUrl: '../../views/builder.html',
          controller: 'BuilderCtrl'
        });

      $urlRouterProvider.otherwise('/');
}]);
