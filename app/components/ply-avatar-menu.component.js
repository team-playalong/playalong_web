(function () {
    'use strict';
    ctrl.$inject = ['$mdDialog', 'login', 'paths'];
    function ctrl($mdDialog, login, paths) {
        var ctrl = this;
        ctrl.login = login;
        ctrl.paths = paths;
        ctrl.passwordText = 'password';
        ctrl.loginSocial = function (platform) {
            login.loginSocial(platform)
                .then(function () {
            });
        };
        ctrl.setMenuStyles = function () {
            var result = {
                height: '100px',
            };
            if (login.isLoggedIn()) {
                result.height = 'auto';
            }
            return result;
        };
        ctrl.setAvatarImage = function () {
            if (!login.isLoggedIn()) {
                return paths.images.emptyAvatar;
            }
            else {
                var auth = login.getAuth();
                if (auth && auth.provider) {
                    return auth[auth.provider].profileImageURL;
                }
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