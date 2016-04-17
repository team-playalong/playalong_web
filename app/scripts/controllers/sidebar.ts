(function() {
  'use strict';
  
angular.module('playalongWebApp')
.controller('SidebarCtrl',SidebarCtrl)
.directive('plySidebar', plySidebar);


function plySidebar(): ng.IDirective {
  return {
    controller: 'SidebarCtrl',
    controllerAs: 'vm',
    template: `
      <header>
        <md-sidenav 
          class=" md-whiteframe-z2 ply-sidenav" 
          md-component-id="left"
          ng-class="{'md-sidenav-right': app.dir === 'rtl', 'md-sidenav-left': app.dir !== 'rtl' }">
          <md-toolbar class="md-theme-indigo" md-scroll-shrink="true">
            <h1 class="md-toolbar-tools" translate="toolbar.APP_NAME" ></h1>
          </md-toolbar>
          <md-content>
            <md-list>
              <div ng-repeat="item in vm.menuItems">
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
    `
  }
}

SidebarCtrl.$inject = ['$mdSidenav'];
function SidebarCtrl($mdSidenav) {
  let vm = this;
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
