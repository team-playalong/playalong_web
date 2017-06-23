function plyLanguagePickerDirective() {
  return {
    template: `
      <ply-icon
        click="vm.showLanguageModal"
        tooltip="'Choose Language'"
        flag="vm.flag"
        size="20"
      >
      </ply-icon>
	    <!-- <md-button class="md-mini ply-flex"
	      ng-click="vm.showLanguageModal($event)"
        data-tip="{{'toolbar.language.CHOOSE' | translate}}">
	      <i class="flag-icon flag-icon-{{vm.getFlagClass()}}"></i>
	    </md-button> -->
    `,
    restrict: 'E',
    controller: 'PlylanguagepickerCtrl',
    controllerAs: 'vm',
    bindToController: true,
  };
}

export default plyLanguagePickerDirective;
