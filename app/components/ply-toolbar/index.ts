import * as angular from 'angular';

import plyAvatarMenu from './avatar-menu/ply-avatar-menu.component';
import { PlylanguagepickerCtrl, LanguageModalDialogController } from './ply-language-picker/plylanguagepicker';
import plyLanguagePickerDirective from './ply-language-picker/plylanguagepicker.component';
import loginCtrl from './login';
import { ToolbarCtrl, plyToolbar } from './toolbar.component';

angular.module('PlyToolbar', [])
.component('plyToolbar', plyToolbar)
.directive('plyLanguagePicker', plyLanguagePickerDirective)
.component('plyAvatarMenu', plyAvatarMenu)
.controller('toolbarCtrl', ToolbarCtrl)
.controller('PlylanguagepickerCtrl', PlylanguagepickerCtrl)
.controller('LoginCtrl', loginCtrl)
.controller('LanguageModalDialogController', LanguageModalDialogController);
