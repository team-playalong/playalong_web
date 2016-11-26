'use strict';

/**
 * @ngdoc service
 * @name playalongWebApp.plyTooltip
 * @description
 * # plyTooltip
 * Service in the playalongWebApp.
 */
class plyTooltip {
	constructor(private $translate) {}

	public getHorizontalDirection() {
		var direction = this.$translate.use() === 'he' ? 'right' : 'left';
		return direction;
	};

	public setTooltip(elem) {
		elem = angular.element(elem);
		elem.attr('uib-tooltip','Test');
	};
}

plyTooltip.$inject = ['$translate'];
angular.module('playalongWebApp')
	.service('plyTooltip', plyTooltip);
