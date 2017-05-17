import 'flag-icon-css/css/flag-icon.min.css';

function plyLanguagePickerDirective() {
  return {
    template: `
	    <md-button class="md-mini ply-flex"
	      ng-click="vm.showLanguageModal($event)">
	      <md-tooltip md-direction="down">{{'toolbar.language.CHOOSE' | translate}}</md-tooltip>

	    	<i class="flag-icon flag-icon-{{vm.getFlagClass()}}"></i>
	    </md-button>
    `,
    restrict: 'E',
    controller: 'PlylanguagepickerCtrl',
    controllerAs: 'vm',
    bindToController: true,
  };
}

export default plyLanguagePickerDirective;
