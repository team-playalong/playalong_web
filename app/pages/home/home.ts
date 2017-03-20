(function() {
  'use strict';

  function PlyHome() {
    return {
      templateUrl: 'pages/home/home.template.html',
      controller: 'HomeCtrl',
      controllerAs: 'home',
    };
  }

  class HomeCtrl {
    public searchByOptions;
    public searchConfig;
    public searchResults;
    public resultMessage;

    constructor(public $rootScope, public chords, public $translate, public $q) {}

    $onInit() {
      if (!!window.mixpanel) {
        window.mixpanel.track('ply_page_view_home');
      }

      this.$rootScope.currPage = 'home.PAGE_TITLE';
      this.searchByOptions = [
        {
          label: 'home.ARTIST',
          value: 'artist',
        },
        {
          label: 'home.SONG_NAME',
          value: 'title',
        },
      ];
      this.searchConfig = {
        searchBy: this.searchByOptions[0].value,
        searchInput: '',
      };

      // Workaround due to translations
      setTimeout(() => {
        const elem = document.querySelector('md-select-value > span');
        if (!!elem) {
          elem.textContent = 'Song Name';
        }

      }, 200);

      this.$rootScope.$on('$stateChangeSuccess',
      /*jshint unused:false */
      (event, toState, toParams, fromState, fromParams) => {
        if (toState.title) {
          this.$rootScope.currPage = toState.title;
        }
      });
    }

    formatResultMessage = () => {
      return new Promise((resolve, reject) => {
        let toTranslate;
        let manyResults;
        if (!this.searchResults || !this.searchResults.length) {
          toTranslate = 'home.EMPTY_RESULT_MESSAGE';
        }
        else if (this.searchResults && this.searchResults.length === 1) {
          toTranslate = 'home.SINGLE_RESULT_MESSAGE';
        }
        else if (this.searchResults && this.searchResults.length > 1) {
          manyResults = true;
          toTranslate = 'home.MANY_RESULT_MESSAGE';
        }
        this.$translate([toTranslate])
        .then(translations => {
          let res = translations[toTranslate];
          if (manyResults && res.indexOf('{numResults}') !== -1) {
            res = res.replace('{numResults}', this.searchResults.length);
          }
          resolve(res);
        });
      });
    }

    handleChordResults = results => {
      if (results && results.length) {
        this.searchResults = results;
      }
      this.chordsFinallyHandler();
    }

    chordsFinallyHandler = () => {
      this.formatResultMessage()
      .then(message => {
        this.resultMessage = message;

        this.$rootScope.startSpin('stopSearchChordsSpinner');
      });
    }

    uppercaseFirstLetter = str => str.split(' ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join(' ');

    searchChords = (numAttempts = 1) => {
      if (numAttempts > 2) { return; }
      this.$rootScope.startSpin('startSearchChordsSpinner');
      this.searchResults = [];
      this.chords.searchChordsBy(this.searchConfig.searchBy, this.searchConfig.searchInput)
        .then((data) => {
          this.handleChordResults(data);
          this.chordsFinallyHandler();
        })
        .catch(error => {
          // Try searching with an upper case for the first letter of each word
          if (numAttempts < 2) {
            this.searchConfig.searchInput = this.uppercaseFirstLetter(this.searchConfig.searchInput);
            this.searchChords(numAttempts + 1);
          }
          else {
            this.searchResults = [];
            console.warn(error);
            this.chordsFinallyHandler();
          }

        });
    }

    // For spinner event listening
    triggerSearchChords = () => {
      this.searchChords();
    }

    /*jshint unused:true*/
  }
  HomeCtrl.$inject = [
    '$rootScope', 'chords', '$translate', '$q',
  ];

  angular.module('playalongWebApp')
  .controller('HomeCtrl', HomeCtrl)
  .directive('plyHome', PlyHome);
})();
