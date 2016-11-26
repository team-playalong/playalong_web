	/**
	 * @ngdoc service
	 * @name playalongWebApp.Common
	 * @description
	 * # Common
	 * Factory in the playalongWebApp.
	 */

	class Common {
		constructor(private RegexStore) {}

		public isRtlContent(content) {
			//enough to find 3 non-english characters and we're good :)
			if (!content) { return false; }
			const matching = content.match(this.RegexStore.get('hebrew'));
			return !!matching && matching.length >= 3;
		}

		public removeDuplicates(collection) {
			return collection.filter((elem, pos, arr) => {
				return arr.indexOf(elem) === pos;
			});
		}
	}
	Common.$inject = ['RegexStore'];
	angular.module('playalongWebApp')
		.service('Common', Common);
