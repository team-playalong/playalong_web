class PlyDate {
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

export default new PlyDate();
