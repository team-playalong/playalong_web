import * as angular from 'angular';
LanguageModalDialogController.$inject = [
  '$mdDialog', '$translate', '$rootScope', 'PlyStorage',
];
export function LanguageModalDialogController($mdDialog, $translate, $rootScope, PlyStorage) {
  const vm = this;

  vm.languages = [
    {
      locale: 'he',
      label: 'עברית',
      flag: 'il',
    },
    {
      locale: 'en',
      label: 'English',
      flag: 'us',
    },
  ];

  vm.changeLanguage = function(locale) {
    if (locale) {
      $translate.use(locale);
      PlyStorage.set('locale', locale);
      $rootScope.app = {
        dir: locale === 'he' ? 'rtl' : 'ltr',
        locale,
      };
      $rootScope.$broadcast('ply_dirChanged');
    }
    vm.cancel();
  };
  vm.hide = function() {
    $mdDialog.hide();
  };
  vm.cancel = function() {
    $mdDialog.cancel();
  };
  vm.answer = function(answer) {
    $mdDialog.hide(answer);
  };
}

PlylanguagepickerCtrl.$inject = [
  '$scope', '$mdDialog', '$mdMedia', '$rootScope',
];
export function PlylanguagepickerCtrl($scope, $mdDialog, $mdMedia, $rootScope) {
  const vm = this;

  vm.getFlagClass = function() {
    let res = 'il';
    if ($rootScope.app && $rootScope.app.locale === 'en') {
      res = 'us';
    }

    return res;
  };

  vm.showLanguageModal = function(ev) {
    $mdDialog.show({
      controller: 'LanguageModalDialogController',
      controllerAs: 'vm',
      bindToController: true,
      templateUrl: 'app/components/ply-toolbar/ply-language-picker/language-picker-modal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose: true,
      fullscreen: $mdMedia('sm') && vm.customFullscreen,
    });

    $scope.$watch(function() {
      return $mdMedia('sm');
    }, function(sm) {
      vm.customFullscreen = (sm === true);
    });
    };
}
