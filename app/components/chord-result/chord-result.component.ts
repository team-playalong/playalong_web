const ChordResult = {
  template: `
  	<md-list-item class="md-2-line clickable">
			<img ng-src="{{$ctrl.chord.imagePath}}" class="md-avatar" ng-if="$ctrl.chord.imagePath" />
			<div class="md-list-item-text" ng-click="$ctrl.redirect($ctrl.chord)">
			  <h3 ng-bind="$ctrl.chord.artist"></h3>
			  <p ng-bind="$ctrl.chord.title"></p>
			  <p ng-if="$ctrl.chord.hitCount" translate="home.HIT_COUNT" translate-values="{hitCount: $ctrl.chord.hitCount}"></p>
			  <star-rating class="non-clickable" ng-if="$ctrl.chord.rating" ng-model="$ctrl.chord.rating" readonly="true"></star-rating>
        <div ng-if="$ctrl.isShowRank()">
          <md-input-container >
            Rank
            <md-select
              class="ply-search-form-select"
              placeholder="..."
              ng-model="$ctrl.chord.rank"
              ng-change="">
              <md-option ng-repeat="rank in $ctrl.availableRanks | orderBy: 'rank'"  value="{{rank}}">
                {{rank}}
              </md-option>
            </md-select>
          </md-input-container>
          <md-button ng-disabled="!$ctrl.chord.rank" class="md-raised" type="submit" ng-click="$ctrl.rankChangeHandler($ctrl.chord)"
            aria-label="Go"
            translate=".SEARCH_BOTTON">
          </md-button>
        </div>

			</div>
			<md-divider ></md-divider>
		</md-list-item>
  `,
  bindings: {
  	chord: '=',
    availableRanks: '<',
    rankChangeHandler: '<',
  },
  controller: ChordResultCtrl,
};

ChordResultCtrl.$inject = ['$rootScope'];
function ChordResultCtrl($rootScope) {

  this.isShowRank = () => this.availableRanks && this.availableRanks.length;

	this.redirect = chord => {
    if (!this.isShowRank()) {
      $rootScope.goToChordPage(chord);
    }

	};
}

export default ChordResult;
