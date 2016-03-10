(function() {
'use strict';

angular.module('playalongWebApp')
.controller('PlylanguagepickerCtrl',PlylanguagepickerCtrl)
.controller('LanguageModalDialogController',LanguageModalDialogController);

LanguageModalDialogController.$inject = [
  '$mdDialog','$translate','$rootScope'
];
function LanguageModalDialogController($mdDialog,$translate,$rootScope) {
  let vm = this;

  vm.languages = [
    {
      locale: 'he',
      label: 'עברית',
      'flag': 'il'
    },
    {
      locale: 'en',
      label: 'English',
      'flag': 'us'
    }
  ];

  vm.changeLanguage = function(locale) {
    if (locale)
    {
      $translate.use(locale);
      $rootScope.app = {
        dir: locale === 'he' ? 'rtl' : 'ltr',
        locale: locale
      };
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
  '$scope','$mdDialog','$mdMedia','$rootScope'
];
function PlylanguagepickerCtrl($scope,$mdDialog,$mdMedia,$rootScope) {
  let vm = this;

  vm.getFlagClass = function() {
    var res = 'il';
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
      templateUrl: 'views/templates/language-picker-modal.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true,
      fullscreen: $mdMedia('sm') && vm.customFullscreen
    })
    .then(function() {
    }, function() {
    });

    $scope.$watch(function() {
      return $mdMedia('sm');
    }, function(sm) {
      vm.customFullscreen = (sm === true);
    });
    };
}
  
})();
