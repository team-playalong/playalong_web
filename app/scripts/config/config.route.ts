(function() {

'use strict';

app.config(RouteConfig);


RouteConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RouteConfig($stateProvider: angular.ui.IStateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      template: '<ply-home></ply-home>',
      data: {
        title: 'Chord Search',
      },
    })
    .state('chord', {
      url: '/chord/:chordKey',
      templateUrl: '../../views/chord.html',
      controller: 'ChordCtrl',
    })
    .state('topChords',  {
        url: '/topChords',
        templateUrl: '../../views/topChords.html',
        controller: 'TopchordsCtrl',
        controllerAs: 'top',
        data: {
          title: 'Top Chords',
        },
    })
    .state('weeklyChart',  {
        url: '/weekly-chart',
        template: '<ply-weekly-chart></ply-weekly-chart>',
        data: {
          title: 'Weekly Chart',
        },
    })
    .state('favorites',  {
        url: '/favorites',
        template: '<ply-favorites></ply-favorites>',
        data: {
          title: 'Favorites',
        },
    })
    .state('tuner',  {
        url: '/tuner',
        template: '<ply-tuner></ply-tuner>',
        data: {
          title: 'Tuner',
        },
    })
    .state('metronome',  {
        url: '/metronome',
        templateUrl: 'pages/metronome/metronome.html',
        controller: 'MetronomeCtrl',
        data: {
          title: 'Metronome',
        },
    })
    .state('suggestions',  {
        url: '/suggestions',
        templateUrl: 'pages/suggestions/suggestions.html',
        controller: 'MetronomeCtrl',
        data: {
          title: 'Metronome',
        },
    })

    .state('builder', {
      url: '/builder',
      template: '<div ui-view></div>',
      abstract: true,
    })
    .state('builder.edit', {
      url: '/edit/:id',
      templateUrl: '../../views/builder.html',
      controller: 'BuilderCtrl',
    })
    .state('builder.new', {
      url: '/new',
      templateUrl: '../../views/builder.html',
      controller: 'BuilderCtrl',
    })
    .state('admin', {
      url: '/admin',
      template: '<admin></admin>',
    })
    .state('admin.weeklyChart', {
      url: '/weeklyChart',
      template: '<admin-weekly-chart></admin-weekly-chart>',
    });

  $urlRouterProvider.otherwise('/home');
}

})();
