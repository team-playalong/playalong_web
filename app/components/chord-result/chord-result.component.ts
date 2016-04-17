(function(window, document) {
	'use strict';

	angular.module('playalongWebApp')
	.component('chordResult', {
	  template: `
	  	<md-list-item class="md-2-line clickable">
				<img ng-src="{{$ctrl.chord.imagePath}}" class="md-avatar" ng-if="$ctrl.chord.imagePath" />
				<div class="md-list-item-text" ng-click="$ctrl.redirect(chord)"> 
				  <h3 ng-bind="$ctrl.chord.artist"></h3>
				  <p ng-bind="$ctrl.chord.title"></p>
				  <p translate="home.HIT_COUNT" translate-values="{hitCount: $ctrl.chord.hitCount}"></p>
				  <star-rating class="non-clickable" ng-if="$ctrl.chord.rating" ng-model="$ctrl.chord.rating" readonly="true"></star-rating>
				</div>
				<md-divider ></md-divider>
			</md-list-item>
	  `,
	  bindings: {
	  	chord: '<'
	  },
	  controller: function() {
	  }
	});

	ChordResult.$inject = ['$rootScope'];
	function ChordResult($rootScope) {
		let vm = this;

		vm.redirect = (chord) => {
			$rootScope.goToChordPage(chord);	
		}
		
	}


})(window, document);
