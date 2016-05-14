(function() {
  'use strict';

  /**
   * @ngdoc service
   * @name playalongWebApp.toast
   * @description
   * # toast
   * Service in the playalongWebApp.
   */
  angular.module('playalongWebApp')
  .service('toast', toast);

  toast.$inject = ['$mdToast', '$translate'];
  function toast($mdToast, $translate) {
    const conf = {
      delay: 4000, //ms
      position: 'bottom left'
    };

    function showSimpleToast(content, delayMs: number = conf.delay) {
      $mdToast.show(
        $mdToast.simple()
          .content(content)
          .position(conf.position)
          .hideDelay(delayMs)
      );
    }
    
    function showToastByTranslation(transKey) {
      $translate([transKey])
      .then(function (translations) {
        if (translations[transKey]) {
          showSimpleToast(translations[transKey]);  
        }
      });
    }

    return {
      showSimpleToast,
      showToastByTranslation,
    };
  }  
})();
