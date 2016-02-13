(function() {
  'use strict';

  angular.module('playalongWebApp')
  .controller('PlylanguagepickerCtrl',PlylanguagepickerCtrl)
  .controller('LanguageModalDialogController',LanguageModalDialogController);

  LanguageModalDialogController.$inject = [
    '$scope', '$mdDialog','$translate','$rootScope'
  ];
  function LanguageModalDialogController($scope, $mdDialog,$translate,$rootScope) {
      $scope.languages = [
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

      $scope.changeLanguage = function(locale) {
        if (locale)
        {
          $translate.use(locale);
          $rootScope.app = {
            dir: locale === 'he' ? 'rtl' : 'ltr',
            locale: locale
          };
        }
        $scope.cancel();
      };


      $scope.hide = function() {
        $mdDialog.hide();
      };
      $scope.cancel = function() {
        $mdDialog.cancel();
      };
      $scope.answer = function(answer) {
        $mdDialog.hide(answer);
      };
  }
  

  PlylanguagepickerCtrl.$inject = [
    '$scope','$mdDialog','$mdMedia','$rootScope'
  ];
  function PlylanguagepickerCtrl($scope,$mdDialog,$mdMedia,$rootScope) {
    $scope.getFlagClass = function() {
      var res = 'il';
      if ($rootScope.app && $rootScope.app.locale === 'en')
      {
        res = 'us';
      }

      return res;
    };


    $scope.showLanguageModal = function(ev) {
      $mdDialog.show({
        controller: 'LanguageModalDialogController',
        templateUrl: 'views/templates/language-picker-modal.html',
        parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose:true,
        fullscreen: $mdMedia('sm') && $scope.customFullscreen
      })
      .then(function() {
      }, function() {
      });

      $scope.$watch(function() {
        return $mdMedia('sm');
      }, function(sm) {
        $scope.customFullscreen = (sm === true);
      });
      };
  }
  
})();
