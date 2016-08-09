(function () {
    'use strict';
    function PlyHome() {
        return {
            templateUrl: 'pages/home/home.template.html',
            controller: 'HomeCtrl',
            controllerAs: 'home',
        };
    }
    var HomeCtrl = (function () {
        function HomeCtrl($rootScope, chords, $translate, $q) {
            var _this = this;
            this.$rootScope = $rootScope;
            this.chords = chords;
            this.$translate = $translate;
            this.$q = $q;
            this.formatResultMessage = function () {
                return new Promise(function (resolve, reject) {
                    var toTranslate;
                    var manyResults;
                    if (!_this.searchResults || !_this.searchResults.length) {
                        toTranslate = 'home.EMPTY_RESULT_MESSAGE';
                    }
                    else if (_this.searchResults && _this.searchResults.length === 1) {
                        toTranslate = 'home.SINGLE_RESULT_MESSAGE';
                    }
                    else if (_this.searchResults && _this.searchResults.length > 1) {
                        manyResults = true;
                        toTranslate = 'home.MANY_RESULT_MESSAGE';
                    }
                    _this.$translate([toTranslate])
                        .then(function (translations) {
                        var res = translations[toTranslate];
                        if (manyResults && res.indexOf('{numResults}') !== -1) {
                            res = res.replace('{numResults}', _this.searchResults.length);
                        }
                        resolve(res);
                    });
                });
            };
            this.handleChordResults = function (results) {
                if (results && results.length) {
                    _this.searchResults = results;
                }
                _this.chordsFinallyHandler();
            };
            this.chordsFinallyHandler = function () {
                _this.formatResultMessage()
                    .then(function (message) {
                    _this.resultMessage = message;
                    _this.$rootScope.startSpin('stopSearchChordsSpinner');
                });
            };
            this.uppercaseFirstLetter = function (str) { return str.split(' ').map(function (s) { return s.charAt(0).toUpperCase() + s.slice(1); }).join(' '); };
            this.searchChords = function (numAttempts) {
                if (numAttempts === void 0) { numAttempts = 1; }
                if (numAttempts > 2) {
                    return;
                }
                _this.$rootScope.startSpin('startSearchChordsSpinner');
                _this.searchResults = [];
                _this.chords.searchChordsBy(_this.searchConfig.searchBy, _this.searchConfig.searchInput)
                    .then(function (data) {
                    _this.handleChordResults(data);
                    _this.chordsFinallyHandler();
                })
                    .catch(function (error) {
                    //Try searching with an upper case for the first letter of each word
                    if (numAttempts < 2) {
                        _this.searchConfig.searchInput = _this.uppercaseFirstLetter(_this.searchConfig.searchInput);
                        _this.searchChords(++numAttempts);
                    }
                    else {
                        _this.searchResults = [];
                        console.warn(error);
                        _this.chordsFinallyHandler();
                    }
                });
            };
            //For spinner event listening
            this.triggerSearchChords = function () {
                _this.searchChords();
            };
        }
        HomeCtrl.prototype.$onInit = function () {
            var _this = this;
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
            //Workaround due to translations
            setTimeout(function () {
                var elem = document.querySelector('md-select-value > span');
                if (!!elem) {
                    elem.textContent = 'Song Name';
                }
            }, 200);
            this.$rootScope.$on('$stateChangeSuccess', 
            /*jshint unused:false */
            function (event, toState, toParams, fromState, fromParams) {
                if (toState.title) {
                    _this.$rootScope.currPage = toState.title;
                }
            });
        };
        return HomeCtrl;
    }());
    HomeCtrl.$inject = [
        '$rootScope', 'chords', '$translate', '$q',
    ];
    angular.module('playalongWebApp')
        .controller('HomeCtrl', HomeCtrl)
        .directive('plyHome', PlyHome);
})();
//# sourceMappingURL=home.js.map