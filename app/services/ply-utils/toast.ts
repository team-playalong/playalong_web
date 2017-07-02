import $mdToast from 'angular-material/angular-material.min';
import $translate from 'angular-translate';

class Toast {

	private conf = {
		delay: 4000, // ms
		position: 'bottom left',
	};

	public showSimpleToast(content, delayMs: number = this.conf.delay) {
		$mdToast.show(
			$mdToast.simple()
				.content(content)
				.position(this.conf.position)
				.hideDelay(delayMs),
		);
	}

	public showToastByTranslation(transKey) {
		$translate([transKey])
		.then(translations => {
			if (translations[transKey]) {
				this.showSimpleToast(translations[transKey]);
			}
		});
	}
}

export default new Toast();
