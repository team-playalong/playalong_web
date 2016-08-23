(function() {
  'use strict';
  const devPrefix = 'http://localhost:3000';
  const prodPrefix = 'https://playalong-notifier.herokuapp.com';

  class PlyNotifier {
    private headers = {
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods' : 'POST, GET, OPTIONS, PUT',
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    };
    private urlPrefix;


    constructor(public $http) {
      if (window.PLY_CONFIG.env === 'dev') {
        this.urlPrefix = devPrefix;
      }
      else {
        this.urlPrefix = prodPrefix;
      }
    }

    notifyChordAdded = ({ chordId }) => {

      return this.$http({
        headers: this.headers,
        method: 'GET',
        url: `${this.urlPrefix}/childAdded/${chordId}`,
      })
      .then(data => console.info('email sent'))
      .catch(err => console.warn(err));
    };

    notifyLogin = ({displayName, uid, email }) => {
      return this.$http({
        headers: this.headers,
        method: 'GET',
        url: `${this.urlPrefix}/login/${uid}/${displayName}/${email}`,
      })
      .then(data => console.info('email sent'))
      .catch(err => console.warn(err));
    };
  }
  PlyNotifier.$inject = ['$http'];

  angular.module('playalongWebApp')
  .service('PlyNotifier', PlyNotifier);
})();
