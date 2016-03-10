(function () {
    'use strict';
    angular.module('playalongWebApp')
        .controller('SidebarCtrl', SidebarCtrl)
        .directive('plySidebar', plySidebar);
    function plySidebar() {
        return {
            controller: 'SidebarCtrl',
            controllerAs: 'vm',
            template: "\n      <header>\n        <md-sidenav class=\" md-whiteframe-z2 ply-sidenav\" \n                    md-component-id=\"left\"\n                    ng-class=\"{'md-sidenav-right': app.dir === 'rtl', 'md-sidenav-left': app.dir !== 'rtl' }\">\n          <md-toolbar class=\"md-theme-indigo\" md-scroll-shrink=\"true\">\n            <h1 class=\"md-toolbar-tools\" translate=\"toolbar.APP_NAME\" ></h1>\n          </md-toolbar>\n          <md-content>\n            <md-list>\n              <div ng-repeat=\"item in vm.menuItems\">\n                <md-list-item class=\"md-3-line clickable\">\n                  <div class=\"md-list-item-text\" ng-click=\"close()\"  ui-sref=\"{{item.ref}}\"  ui-sref-active=\"active\">\n                    <i class=\"fa fa-{{item.icon}}\"></i>\n                    <md-button class=\"md-primary\">{{item.text | translate}}</md-button>\n                  </div>\n                </md-list-item>\n                <md-divider ></md-divider>\n               </div>\n              </md-list>\n          </md-content>\n        </md-sidenav>\n      </header>\n    "
        };
    }
    SidebarCtrl.$inject = ['$mdSidenav'];
    function SidebarCtrl($mdSidenav) {
        var vm = this;
        vm.menuItems = [
            {
                text: 'sidebar.menu.SEARCH',
                ref: 'home',
                icon: 'search'
            },
            {
                text: 'sidebar.menu.CHORD_BUILDER',
                ref: 'builder.new',
                icon: 'pencil'
            },
            {
                text: 'sidebar.menu.FAVORITES',
                ref: 'favorites',
                icon: 'heart'
            },
            {
                text: 'sidebar.menu.TUNER',
                ref: 'tuner',
                icon: 'music'
            },
            {
                text: 'sidebar.menu.METRONOME',
                ref: 'metronome',
                icon: 'caret-up'
            },
            {
                text: 'Suggestions',
                ref: 'suggestions',
                icon: 'lightbulb-o'
            },
        ];
        vm.close = function () {
            $mdSidenav('left').close()
                .then(function () {
            });
        };
    }
})();
//# sourceMappingURL=sidebar.js.map