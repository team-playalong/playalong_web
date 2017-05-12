import plyAvatarMenu from './avatar-menu/ply-avatar-menu.component';
import { PlylanguagepickerCtrl, LanguageModalDialogController } from './ply-language-picker/plylanguagepicker';
import plyLanguagePickerDirective from './ply-language-picker/plylanguagepicker.component';
import loginCtrl from './login';

function plyToolbar() {
  return {
    restrict: 'E',
    templateUrl: 'app/components/ply-toolbar/toolbar.html',
  };
}

angular.module('PlyToolbar', [])
.directive('plyToolbar', plyToolbar)
.directive('plyLanguagePicker', plyLanguagePickerDirective)
.component('plyAvatarMenu', plyAvatarMenu)
.controller('PlylanguagepickerCtrl', PlylanguagepickerCtrl)
.controller('LoginCtrl', loginCtrl)
.controller('LanguageModalDialogController', LanguageModalDialogController);
