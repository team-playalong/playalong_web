'use strict';

app.config(['$stateProvider','$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

      $stateProvider
        .state("home",{ 
          url: "/home",
          templateUrl: '../../views/home.html',     
          controller: 'HomeCtrl',
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
}]);
