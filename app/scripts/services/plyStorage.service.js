(function () {
    'use strict';
    var PlyStorage = (function () {
        function PlyStorage(localStorageService) {
            this.localStorageService = localStorageService;
        }
        PlyStorage.prototype.get = function (itemKey) {
            return this.localStorageService.get(itemKey);
        };
        PlyStorage.prototype.set = function (itemKey, itemValue) {
            this.localStorageService.set(itemKey, itemValue);
        };
        return PlyStorage;
    })();
    angular.module('playalongWebApp')
        .factory('PlyStorage', PlyStorage);
})();
//# sourceMappingURL=plyStorage.service.js.map