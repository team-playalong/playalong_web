/// <reference path="../../ply.d.ts" />
(function() {

'use strict';

app.config(RouteConfig);


RouteConfig.$inject = ['$stateProvider','$urlRouterProvider'];
function RouteConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider) {
  $stateProvider
    .state("home",{ 
      url: "/home",
      templateUrl: '../../views/home.html',     
      controller: 'HomeCtrl',
      controllerAs: 'home',
      data: {
        title: 'Chord Search'
      }
    })
    .state("chord", { 
      url: "/chord/:chordKey",
      templateUrl: '../../views/chord.html',    
      controller: 'ChordCtrl'
    })
    .state('topChords',  { 
        url: '/topChords',
        templateUrl: '../../views/topChords.html',
        controller: 'TopchordsCtrl',
        controllerAs: 'top',
        data: {
          title: 'Top Chords'
        }
    })
    .state('favorites',  { 
        url: '/favorites',
        templateUrl: '../../views/favorites.html',
        controller: 'FavoritesCtrl',
        data: {
          title: 'Favorites'
        }
    })
    .state('tuner',  { 
        url: '/tuner',
        templateUrl: 'pages/tuner/tuner.html',
        controller: 'TunerCtrl',
        data: {
          title: 'Tuner'
        }
    })
    .state('metronome',  { 
        url: '/metronome',
        templateUrl: 'pages/metronome/metronome.html',
        controller: 'MetronomeCtrl',
        data: {
          title: 'Metronome'
        }
    })
    .state('suggestions',  { 
        url: '/suggestions',
        templateUrl: 'pages/suggestions/suggestions.html',
        controller: 'MetronomeCtrl',
        data: {
          title: 'Metronome'
        }
    })
    
    .state('builder',       { url: '/builder',        template: '<div ui-view></div>', abstract: true})
    .state('builder.edit', { 
      url: '/edit/:id',
      resolve: {
        // controller will not be loaded until $waitForAuth resolves
        // Auth refers to our $firebaseAuth wrapper in the example above
        "currentAuth": ["Auth", function(Auth) {
          // $waitForAuth returns a promise so the resolve waits for it to complete
          return Auth.$waitForAuth();
        }]
      },
      templateUrl: '../../views/builder.html',
      controller: 'BuilderCtrl'
    })
    .state('builder.new', { 
      url: '/new',
      templateUrl: '../../views/builder.html',
      controller: 'BuilderCtrl'
    });

  $urlRouterProvider.otherwise('/home');
}
  
})();
