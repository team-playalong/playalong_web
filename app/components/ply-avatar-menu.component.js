(function () {
    'use strict';
    resetPassword.$inject = ['login', '$mdDialog'];
    function resetPassword(login, $mdDialog) {
        var ctrl = this;
        ctrl.$mdDialog = $mdDialog;
        ctrl.resetPassword = function (email) {
            login.resetPassword(ctrl.email)
                .then(function (data) {
                ctrl.resetSuccess = true;
                ctrl.resetError = false;
            })
                .catch(function (error) {
                ctrl.resetSuccess = false;
                ctrl.resetError = true;
            });
        };
    }
    changePassword.$inject = ['login', '$mdDialog'];
    function changePassword(login, $mdDialog) {
        var ctrl = this;
        ctrl.$mdDialog = $mdDialog;
        ctrl.passwordType = 'password';
        ctrl.emailType = 'email';
        ctrl.changePassword = function (email, oldPassword, newPassword) {
            login.changePassword(email, oldPassword, newPassword)
                .then(function (data) {
                ctrl.changeSuccess = true;
                ctrl.changeError = false;
            })
                .catch(function (error) {
                ctrl.changeSuccess = false;
                ctrl.changeError = true;
            });
        };
    }
    ctrl.$inject = ['$mdDialog', 'login', 'paths', 'toast', '$translate'];
    function ctrl($mdDialog, login, paths, toast, $translate) {
        var ctrl = this;
        ctrl.login = login;
        ctrl.paths = paths;
        ctrl.$onInit = function () {
            ctrl.passwordText = 'password';
        };
        ctrl.loginSocial = function (platform) {
            login.loginSocial(platform)
                .then(function () {
            });
        };
        ctrl.setMenuStyles = function () {
            var result = {
                minHeight: '400px',
            };
            if (login.isLoggedIn()) {
                result.minHeight = 'auto';
            }
            return result;
        };
        ctrl.loginEmail = function (email, password) {
            login.loginEmail(email, password)
                .catch(function (error) {
                $mdDialog.show($mdDialog.alert()
                    .clickOutsideToClose(true)
                    .title('Error')
                    .content('Invalid email or password')
                    .ariaLabel('Invalid Email')
                    .ok('OK'));
            });
        };
        ctrl.openResetPasswordModal = function (event) {
            $mdDialog.show({
                controller: resetPassword,
                bindToController: true,
                controllerAs: 'ctrl',
                template: "\n\t\t\t  \t<md-dialog aria-label=\"Reset Password\"\n\t\t\t  \t\tflex=\"1\"\n\t\t\t  \t  ng-cloak translate-namespace=\"toolbar.login\">\n\t\t\t  \t  <md-toolbar>\n\t\t\t  \t    <div class=\"md-toolbar-tools\">\n\t\t\t  \t      <h2 translate=\".RESET_PASSWORD\"></h2>\n\t\t\t  \t      <span flex></span>\n\t\t\t  \t      <md-button class=\"md-icon-button\" ng-click=\"ctrl.$mdDialog.cancel()\">\n\t\t\t  \t        &times;\n\t\t\t  \t      </md-button>\n\t\t\t  \t    </div>\n\t\t\t  \t  </md-toolbar>\n\t\t\t  \t  <md-dialog-content>\n\t\t\t  \t    <div class=\"md-dialog-content\">\n\t\t\t  \t      <div layout=\"row\">\n\t\t\t  \t      \t<div flex=\"60\">\n\t\t\t  \t      \t\t\t<ply-text-input\n\t\t\t  \t      \t      text-input-label=\"'.EMAIL'\"\n\t\t\t  \t      \t      text-input-model=\"ctrl.email\">\n\t\t\t  \t      \t    </ply-text-input>\n\t\t\t  \t      \t</div>\n  \t\t\t  \t    \t<div flex=\"40\">\n  \t  \t      \t\t\t<md-button class=\"md-primary md-hue-1\"\n  \t  \t      \t\t\t  aria-label=\"Reset Password\"\n  \t  \t      \t\t\t  translate=\".RESET_PASSWORD\"\n  \t  \t      \t\t\t  ng-click=\"ctrl.resetPassword(ctrl.email)\">\n  \t  \t      \t\t\t</md-button>\n  \t\t  \t      \t</div>\n\t\t\t  \t    \t</div>\n\t\t\t  \t    \t<div layout=\"row\">\n\t\t\t\t\t\t\t\t\t<span translate=\".RESET_MESSAGE\" ng-if=\"ctrl.resetSuccess\"></span>\n\t\t\t\t\t\t\t\t\t<span translate=\".RESET_ERROR\" ng-if=\"ctrl.resetError\"></span>\n\t\t\t  \t    \t</div>\n\n\t\t  \t    \t</div>\n\t\t\t  \t  </md-dialog-content>\n\t\t\t  \t</md-dialog>\n\t\t\t  ",
                parent: angular.element(document.body),
                clickOutsideToClose: true,
            })
                .then(function () {
            }, function () {
            });
        };
        ctrl.openChangePasswordModal = function (event) {
            $mdDialog.show({
                controller: changePassword,
                bindToController: true,
                controllerAs: 'ctrl',
                template: "\n\t\t\t  \t<md-dialog aria-label=\"Change Password\"\n\t\t\t  \t\tflex=\"1\"\n\t\t\t  \t  ng-cloak translate-namespace=\"toolbar.login\">\n\t\t\t  \t  <md-toolbar>\n\t\t\t  \t    <div class=\"md-toolbar-tools\">\n\t\t\t  \t      <h2 translate=\".CHANGE_PASSWORD\"></h2>\n\t\t\t  \t      <span flex></span>\n\t\t\t  \t      <md-button class=\"md-icon-button\" ng-click=\"ctrl.$mdDialog.cancel()\">\n\t\t\t  \t        &times;\n\t\t\t  \t      </md-button>\n\t\t\t  \t    </div>\n\t\t\t  \t  </md-toolbar>\n\t\t\t  \t  <md-dialog-content>\n\t\t\t  \t    <div class=\"md-dialog-content\">\n\t\t\t  \t    <form name=\"changePassword\">\n\t\t\t  \t      <div layout=\"row\" layout-sm=\"column\">\n\t\t\t  \t      \t<div flex=\"2\">\n\t\t\t  \t      \t\t\t<ply-text-input\n\t\t\t  \t      \t\t\t\ttext-input-type=\"ctrl.emailType\"\n\t\t\t  \t      \t      text-input-label=\"'.EMAIL'\"\n\t\t\t  \t      \t      text-input-model=\"ctrl.email\">\n\t\t\t  \t      \t    </ply-text-input>\n\t\t\t  \t      \t</div>\n\t\t\t  \t      \t<div flex=\"2\">\n\t\t\t  \t      \t\t\t<ply-text-input\n\t\t\t  \t      \t\t\t\ttext-input-type=\"ctrl.passwordType\"\n\t\t\t  \t      \t      text-input-label=\"'.OLD_PASSWORD'\"\n\t\t\t  \t      \t      text-input-model=\"ctrl.oldPassword\">\n\t\t\t  \t      \t    </ply-text-input>\n\t\t\t  \t      \t</div>\n\t\t\t  \t      \t<div flex=\"2\">\n\t\t\t  \t      \t\t\t<ply-text-input\n\t\t\t  \t      \t\t\t\ttext-input-type=\"ctrl.passwordType\"\n\t\t\t  \t      \t      text-input-label=\"'.NEW_PASSWORD'\"\n\t\t\t  \t      \t      text-input-model=\"ctrl.newPassword\">\n\t\t\t  \t      \t    </ply-text-input>\n\t\t\t  \t      \t</div>\n  \t\t\t  \t    \t<div flex=\"1\">\n  \t  \t      \t\t\t<md-button class=\"md-raised md-hue-1\"\n  \t  \t      \t\t\t  aria-label=\"Change Password\"\n  \t  \t      \t\t\t  translate=\".CHANGE_PASSWORD\"\n  \t  \t      \t\t\t  ng-click=\"ctrl.changePassword(ctrl.email, ctrl.oldPassword, ctrl.newPassword)\">\n  \t  \t      \t\t\t</md-button>\n  \t\t  \t      \t</div>\n\t\t\t  \t    \t</div>\n\t\t\t  \t    \t<div layout=\"row\">\n\t\t\t\t\t\t\t\t\t<span translate=\".CHANGE_MESSAGE\" ng-if=\"ctrl.changeSuccess\"></span>\n\t\t\t\t\t\t\t\t\t<span translate=\".CHANGE_ERROR\" ng-if=\"ctrl.changeError\"></span>\n\t\t\t  \t    \t</div>\n\t\t\t  \t    </form>\n\n\n\t\t  \t    \t</div>\n\t\t\t  \t  </md-dialog-content>\n\t\t\t  \t</md-dialog>\n\t\t\t  ",
                parent: angular.element(document.body),
                clickOutsideToClose: true,
            })
                .then(function () {
            }, function () {
            });
        };
        ctrl.setAvatarImage = function () {
            if (!login.isLoggedIn()) {
                return paths.images.emptyAvatar;
            }
            else {
                var auth = login.getAuth() || {};
                return auth.photoURL;
            }
        };
    }
    angular.module('playalongWebApp')
        .component('plyAvatarMenu', {
        templateUrl: 'components/ply-avatar-menu.component.html',
        controller: ctrl,
        controllerAs: 'ctrl',
    });
})();
//# sourceMappingURL=ply-avatar-menu.component.js.map