import * as angular from 'angular';
import { getNestedProperty } from '../../react/helpers/object';

const plyToolbar = {
  templateUrl: 'app/components/ply-toolbar/toolbar.html',
  controller: 'toolbarCtrl',
};

class ToolbarCtrl {
  static $inject = ['$rootScope'];
  private setBackArrow = () => getNestedProperty(this, '$rootScope.app.dir') === 'rtl' ? 'arrow-right' : 'arrow-left';

  menu = {
    icon: 'bars',
    click: getNestedProperty(this, '$rootScope.toggleSidebar'),
  };
  back = {
    icon: this.setBackArrow(),
    click: () => history.back(),
  };

  constructor(private $rootScope) {}

  $onInit() {
    this.$rootScope.$on('ply_dirChanged', () => {
      this.back.icon = this.setBackArrow();
    });
  }
}

export { plyToolbar, ToolbarCtrl };
