(function() {
	'use strict';

	class PlyStorage {
		private localStorageService;

		constructor(localStorageService) {
			this.localStorageService = localStorageService;
		}

		get(itemKey: string) {
			return this.localStorageService.get(itemKey);
		}

		set(itemKey: string, itemValue: any) {
			this.localStorageService.set(itemKey, itemValue);
		}
	}

	angular.module('playalong.services')
	.service('PlyStorage', PlyStorage);

})();