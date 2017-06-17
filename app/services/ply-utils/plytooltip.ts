import * as angular from 'angular';
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
		const newElem = angular.element(elem);
		newElem.attr('uib-tooltip', 'Test');
	};
}

PlyTooltip.$inject = ['$translate'];

export default PlyTooltip;
