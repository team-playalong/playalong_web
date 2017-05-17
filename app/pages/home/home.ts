import topchordsCtrl from './topchords';
import ChordSearchModel from './chord-search.model';

function PlyHome() {
  return {
    templateUrl: './app/pages/home/home.template.html',
    controller: 'HomeCtrl',
    controllerAs: 'home',
  };
}

class HomeCtrl {
  public searchByOptions;
  public searchConfig;
  public searchResults;
  public resultMessage;
  public plyOnChange;

  constructor(public $rootScope, public chords, public $translate, public $q, public ChordSearchModel: ChordSearchModel) {}

  $onInit() {
    if (!!window.mixpanel) {
      window.mixpanel.track('ply_page_view_home');
    }
    this.$rootScope.currPage = 'home.PAGE_TITLE';

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
    this.chords.searchChordsBy(this.ChordSearchModel.searchConfig.searchBy, this.ChordSearchModel.searchConfig.searchInput)
      .then((data) => {
        this.handleChordResults(data);
        this.chordsFinallyHandler();
      })
      .catch(error => {
        // Try searching with an upper case for the first letter of each word
        if (numAttempts < 2) {
          this.ChordSearchModel.searchConfig.searchInput = (this.uppercaseFirstLetter(this.ChordSearchModel.searchConfig.searchInput));
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
  '$rootScope', 'chords', '$translate', '$q', 'ChordSearchModel',
];

angular.module('PlyHome', [])
.controller('HomeCtrl', HomeCtrl)
.controller('TopchordsCtrl', topchordsCtrl)
.service('ChordSearchModel', ChordSearchModel)
.directive('plyHome', PlyHome);
