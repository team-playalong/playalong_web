/**
 * @ngdoc service
 * @name playalongWebApp.toast
 * @description
 * # toast
 * API for making toast (popup) messages
 */

class Toast {

	private conf = {
		delay: 4000, // ms
		position: 'bottom left',
	};

	constructor(private $mdToast, private $translate) {}

	public showSimpleToast(content, delayMs: number = this.conf.delay) {
		this.$mdToast.show(
			this.$mdToast.simple()
				.content(content)
				.position(this.conf.position)
				.hideDelay(delayMs),
		);
	}

	public showToastByTranslation(transKey) {
		this.$translate([transKey])
		.then(translations => {
			if (translations[transKey]) {
				this.showSimpleToast(translations[transKey]);
			}
		});
	}
}

Toast.$inject = ['$mdToast', '$translate'];
angular.module('playalongWebApp')
	.service('Toast', Toast);
