(function() {
	'use strict';
	
	ctrl.$inject = ['$mdDialog'];
	function ctrl($mdDialog) {
		let originatorEv;
    this.openMenu = function($mdOpenMenu, ev) {
      originatorEv = ev;
      $mdOpenMenu(ev);
    };
    this.announceClick = function(index) {
      $mdDialog.show(
        $mdDialog.alert()
          .title('You clicked!')
          .textContent('You clicked the menu item at index ' + index)
          .ok('Nice')
          .targetEvent(originatorEv)
      );
      originatorEv = null;
    };
	}

	angular.module('playalongWebApp')
		.component('plyAvatarMenu', {
			template: `
				<div class="md-menu-demo" ng-cloak style="min-height:350px;">
				  <div class="menu-demo-container" layout-align="start center" layout="column" >
				    <div class="menus"  layout-wrap layout="row" layout-fill layout-align="space-between center" style="min-height:200px;">
				      <div layout="column" flex="33" flex-sm="100" layout-align="center center">
				        <p>Target Mode Positioning (default)</p>
				        <md-menu>
				          <md-button aria-label="Open demo menu" ng-click="$mdOpenMenu($event)">
				            
				          </md-button>
				          <md-menu-content width="6">
				            <md-menu-item ng-repeat="item in [1, 2, 3]">
				              <md-button ng-click="ctrl.announceClick($index)">
				                Option {{item}}
				              </md-button>
				            </md-menu-item>
				          </md-menu-content>
				        </md-menu>
				      </div>
				    </div>
				    </div>
				  </div>
				</div>
			`,
			controller: ctrl,
			controllerAs: 'ctrl',
		});

})();