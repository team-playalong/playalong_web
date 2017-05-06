class PlyDate {
	static $inject = ['$mdToast', '$translate'];
	constructor(private $mdToast, private $translate) {}

	public getAllWeekNumbers() {
		const allWeekNumbers = [];
		for (let i = 1; i < 55; ++i) {
			allWeekNumbers.push(i);
		}

		return allWeekNumbers;
	}

	public getAllYears() {
		return [2016, 2017];
	}
}

export default PlyDate;
