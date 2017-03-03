(function() {
	'use strict';

angular.module('playalongWebApp')
.controller('TopchordsCtrl', TopchordsCtrl);

TopchordsCtrl.$inject = ['chords', '$rootScope', '$translate'];
	function TopchordsCtrl(chords, $rootScope, $translate) {
		let vm = this;
	$translate(['topChords.PAGE_TITLE',
							'home.PAGE_TITLE',
							'topChords.SINGLE_HIT',
							'topChords.MANY_HITS'])
	.then(function (translations) {
		$rootScope.currPage = 'topChords.PAGE_TITLE';

		vm.setHitCountMessage = function(hitCount) {
			if (!hitCount) {
				return null;
			}
			else if (hitCount === 1) {
				return translations['topChords.SINGLE_HIT'];
			}
			else {
				const tmp = translations['topChords.MANY_HITS'];
				return tmp.replace('{hitCount}', hitCount);
			}
		};

	});

  function getDefaultTimestamp() {
    // Get a date object for the current time
    const d = new Date();

    // Set it to one month ago
    d.setMonth(d.getMonth() - 1);

    // Zero the hours
    d.setHours(0, 0, 0);

    return d.getTime();
  }

  function formateChords(rawData) {
    const timestamp = getDefaultTimestamp();
    for (let chord of rawData) {
      if (!chord.creationDate) {
        chord.creationDate = timestamp;
      }
    }

    return rawData;
  }

	vm.defaultTopLimit = 50;
	vm.getTopChords = function(limitTo) {
		$rootScope.startSpin('startTopChordsSpinner');
		limitTo = limitTo || vm.defaultTopLimit;

    chords.getNewestChords(limitTo)
      .then(data => {
        vm.topChords = formateChords(data);
        $rootScope.stopSpin('stopTopChordsSpinner');
      })
      .catch((error) => {
        $rootScope.stopSpin('stopTopChordsSpinner');
      });
	};

	//Race condition with spinner directive
	setTimeout(function() {
		vm.getTopChords();
	}, 20);
}
})();
