'use strict';

/**
 * @ngdoc service
 * @name playalongWebApp.plyTooltip
 * @description
 * # plyTooltip
 * Service in the playalongWebApp.
 */
class PlyTooltip {
	constructor(private $translate) {}

	public getHorizontalDirection() {
		const direction = this.$translate.use() === 'he' ? 'right' : 'left';
		return direction;
	};

	public setTooltip(elem) {
		elem = angular.element(elem);
		elem.attr('uib-tooltip', 'Test');
	};
}

PlyTooltip.$inject = ['$translate'];
angular.module('playalongWebApp')
	.service('PlyTooltip', PlyTooltip);
