(function() {
	'use strict';

	var TopchordsCtrl = function ($scope,chords, $rootScope,$translate) {
		$translate(['topChords.PAGE_TITLE',
								'home.PAGE_TITLE',
								'topChords.SINGLE_HIT',
								'topChords.MANY_HITS'])
		.then(function (translations) {
			$rootScope.currPage = 'topChords.PAGE_TITLE';

			$scope.setHitCountMessage = function(hitCount) {
				if (!hitCount)
				{
					return null;
				}
				else if (hitCount === 1)
				{
					return translations['topChords.SINGLE_HIT'];
				}
				else {
					var tmp = translations['topChords.MANY_HITS'];
					return tmp.replace('{hitCount}', hitCount);
				}
			};

		});

		$scope.defaultTopLimit = 50;
		$scope.getTopChords = function(limitTo) {
			$rootScope.startSpin('startTopChordsSpinner');
			limitTo = limitTo || $scope.defaultTopLimit;

			chords.getTopChords(limitTo)
			.then(function(data) {
				$scope.topChords = data;
			})
			.finally(function() {
				$rootScope.stopSpin('stopTopChordsSpinner');
			});
		};

		//Race condition with spinner directive
		setTimeout(function() {
			$scope.getTopChords();
		},20);
		
	};
	
	/**
	 * @ngdoc function
	 * @name playalongWebApp.controller:TopchordsCtrl
	 * @description
	 * Getting the top chords - mostly by hit count
	 * # TopchordsCtrl
	 * Controller of the playalongWebApp
	 */
	angular.module('playalongWebApp')
	.controller('TopchordsCtrl', ['$scope','chords','$rootScope','$translate',TopchordsCtrl]);
})();
