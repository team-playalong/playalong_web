(function() {
  'use strict';

  class PlyNotifier {
    constructor(public $http) {}

    notifyChordAdded = ({ chordId }) => {
      const headers = {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      };


      return this.$http({
        headers,
        method: 'GET',
        url: `https://playalong-notifier.herokuapp.com/childAdded/${chordId}`,
      })
      .then(data => console.info('email sent'))
      .catch(err => console.warn(err));
    };
  }
  PlyNotifier.$inject = ['$http'];

  angular.module('playalongWebApp')
  .service('PlyNotifier', PlyNotifier);
})();
