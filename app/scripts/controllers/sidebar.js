(function () {
    'use strict';
    var plySidebar = {
        controller: 'SidebarCtrl',
        controllerAs: 'vm',
        template: "\n      <header>\n      <md-sidenav \n        class=\" md-whiteframe-z2 ply-sidenav\" \n        md-component-id=\"left\"\n        ng-class=\"{'md-sidenav-right': app.dir === 'rtl', 'md-sidenav-left': app.dir !== 'rtl' }\">\n        <md-toolbar class=\"md-theme-indigo\" md-scroll-shrink=\"true\">\n          <h1 class=\"md-toolbar-tools\" translate=\"toolbar.APP_NAME\" ></h1>\n        </md-toolbar>\n        <md-content>\n          <md-list>\n            <div ng-repeat=\"item in vm.menuItems\" ng-if=\"vm.showMenuItem(item)\">\n              <md-list-item class=\"md-3-line clickable\">\n                <div class=\"md-list-item-text\" ng-click=\"vm.close()\"  ui-sref=\"{{item.ref}}\"  ui-sref-active=\"active\">\n                  <i class=\"fa fa-{{item.icon}}\"></i>\n                  <md-button class=\"md-primary\">{{item.text | translate}}</md-button>\n                </div>\n              </md-list-item>\n              <md-divider ></md-divider>\n             </div>\n            </md-list>\n        </md-content>\n      </md-sidenav>\n    </header>\n    ",
    };
    SidebarCtrl.$inject = ['$mdSidenav', 'login'];
    function SidebarCtrl($mdSidenav, login) {
        var vm = this;
        vm.menuItems = [
            {
                text: 'sidebar.menu.SEARCH',
                ref: 'home',
                icon: 'search',
            },
            {
                text: 'sidebar.menu.CHORD_BUILDER',
                ref: 'builder.new',
                icon: 'pencil',
            },
            {
                text: 'sidebar.menu.FAVORITES',
                ref: 'favorites',
                icon: 'heart',
            },
            {
                text: 'sidebar.menu.TUNER',
                ref: 'tuner',
                icon: 'music',
            },
            {
                text: 'sidebar.menu.METRONOME',
                ref: 'metronome',
                icon: 'caret-up',
            },
            {
                text: 'Suggestions',
                ref: 'suggestions',
                icon: 'lightbulb-o',
            },
            {
                text: 'Weekly Chart Admin',
                ref: 'admin.weeklyChart',
                icon: 'bar-chart',
                isAdmin: true,
            },
        ];
        vm.close = function () {
            $mdSidenav('left').close()
                .then(function () {
            });
        };
        vm.showMenuItem = function (item) {
            if (!item.isAdmin) {
                return true;
            }
            else {
                return login.isSuperUser();
            }
        };
    }
    angular.module('playalongWebApp')
        .controller('SidebarCtrl', SidebarCtrl)
        .component('plySidebar', plySidebar);
})();
//# sourceMappingURL=sidebar.js.map