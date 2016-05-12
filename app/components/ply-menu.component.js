(function () {
    'use strict';
    ctrl.$inject = ['$mdDialog'];
    function ctrl($mdDialog) {
        var originatorEv;
        this.openMenu = function ($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };
        this.announceClick = function (index) {
            $mdDialog.show($mdDialog.alert()
                .title('You clicked!')
                .textContent('You clicked the menu item at index ' + index)
                .ok('Nice')
                .targetEvent(originatorEv));
            originatorEv = null;
        };
    }
    angular.module('playalongWebApp')
        .component('plyAvatarMenu', {
        template: "\n\t\t\t\t<div layout=\"row\">\n\t        <md-menu>\n\t          <md-button \n\t          \taria-label=\"Open avatar menu\" \n\t          \tng-click=\"$mdOpenMenu($event)\"\n\t          \ttranslate=\".LOGIN\">\n\t          </md-button>\n\t          <md-menu-content width=\"6\">\n\t            <md-menu-item>\n                <ply-text-input\n                  text-input-label=\"'.EMAIL'\"\n                  text-input-model=\"ctrl.email\">\n                </ply-text-input>\n\t            </md-menu-item>\n\t          </md-menu-content>\n\t        </md-menu>\n\t\t\t\t</div>\n\t\t\t",
        controller: ctrl,
        controllerAs: 'ctrl',
    });
})();
//# sourceMappingURL=ply-menu.component.js.map