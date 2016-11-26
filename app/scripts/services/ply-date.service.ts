class PlyDate {
	constructor(private $mdToast, private $translate)  {}

	public getAllWeekNumbers() {
		let allWeekNumbers = [];
		for (let i = 1; i < 55; ++i) {
			allWeekNumbers.push(i);
		}

		return allWeekNumbers;
	}

	public getAllYears() {
		return [2016, 2017];
	}
}
PlyDate.$inject = ['$mdToast', '$translate']

angular.module('playalongWebApp')
	.service('PlyDate', PlyDate);
