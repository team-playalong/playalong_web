const ChordResult = {
  template: `
  	<md-list-item class="md-2-line clickable">
      <ply-image
        class="margin-right-10"
        src="$ctrl.chord.imagePath"
        type="'avatar'"
        height="'80px'"
        width="'80px'"
        ng-if="$ctrl.chord.imagePath"
      >
      </ply-image>
			<div class="md-list-item-text" ng-click="$ctrl.redirect($ctrl.chord)">
			  <h3 ng-bind="$ctrl.chord.artist"></h3>
			  <p ng-bind="$ctrl.chord.title"></p>
			  <p ng-if="$ctrl.chord.hitCount" translate="home.HIT_COUNT" translate-values="{hitCount: $ctrl.chord.hitCount}"></p>
        <ply-rating readonly="true" value="$ctrl.chord.rating"></ply-rating>
        <div ng-if="$ctrl.isShowRank()">
          <label>Rank</label>
          <ply-dropdown
            options="$ctrl.availableRanks"
            value="$ctrl.chord.rank"
            change="$ctrl.onRankChange"
          ></ply-dropdown>
          <!-- <md-input-container >
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
          </md-input-container> -->
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

ChordResultCtrl.$inject = ['$rootScope', '$timeout'];
function ChordResultCtrl($rootScope, $timeout) {

  this.isShowRank = () => this.availableRanks && this.availableRanks.length;

	this.redirect = chord => {
    if (!this.isShowRank()) {
      $rootScope.goToChordPage(chord);
    }

	};

  this.onRankChange = (e, key, rank) => {
    $timeout(() => {
      this.chord.rank = rank;
    });
  };
}

export default ChordResult;
