const plySidebar = {
  controller: 'SidebarCtrl',
  controllerAs: 'vm',
  template: `
    <header>
    <md-sidenav
      class=" md-whiteframe-z2 ply-sidenav"
      md-component-id="left"
      ng-class="{'md-sidenav-right': $root.app.dir === 'rtl', 'md-sidenav-left': $root.app.dir !== 'rtl' }">
      <md-toolbar class="md-theme-indigo" md-scroll-shrink="true">
        <h1 class="md-toolbar-tools" translate="toolbar.APP_NAME" ></h1>
      </md-toolbar>
      <md-content>
        <md-list>
          <div ng-repeat="item in vm.menuItems" ng-if="vm.showMenuItem(item)">
            <md-list-item class="md-3-line clickable">
              <div class="md-list-item-text" ng-click="vm.close()"  ui-sref="{{item.ref}}"  ui-sref-active="active">
                <i class="fa fa-{{item.icon}}"></i>
                <md-button class="md-primary">{{item.text | translate}}</md-button>
              </div>
            </md-list-item>
            <md-divider ></md-divider>
           </div>
          </md-list>
      </md-content>
    </md-sidenav>
  </header>
  `,
};

SidebarCtrl.$inject = ['$mdSidenav', 'login'];
function SidebarCtrl($mdSidenav, login) {
  const vm = this;
  vm.menuItems = [
    {
      text: 'sidebar.menu.SEARCH',
      ref: 'home',
      icon: 'search',
    },
    {
      text: 'sidebar.menu.WEEKLY_CHART',
      ref: 'weeklyChart',
      icon: 'bar-chart',
    },
    {
      text: 'sidebar.menu.CHORD_BUILDER',
      ref: 'builder.new',
      icon: 'pencil',
      isAdmin: true,
    },
    {
      text: 'sidebar.menu.FAVORITES',
      ref: 'favorites',
      icon: 'heart',
    },

    // TODO - stabilize it
    // {
    //   text: 'sidebar.menu.TUNER',
    //   ref: 'tuner',
    //   icon: 'music',
    // },
    // {
    //   text: 'sidebar.menu.METRONOME',
    //   ref: 'metronome',
    //   icon: 'caret-up',
    // },
    // {
    //   text: 'Suggestions',
    //   ref: 'suggestions',
    //   icon: 'lightbulb-o',
    // },
    {
      text: 'Weekly Chart Admin',
      ref: 'admin.weeklyChart',
      icon: 'bar-chart',
      isAdmin: true,
    },
  ];
  vm.close = function () {
    $mdSidenav('left').close();
  };
  vm.showMenuItem = item => {
    if (!item || !item.isAdmin) {
      return true;
    }
    else {
      return login.isSuperUser();
    }
  };
}

angular.module('PlySidebar', [])
.controller('SidebarCtrl', SidebarCtrl)
.component('plySidebar', plySidebar);
