import RegexStore from './regexstore';

class Common {
	public isRtlContent(content) {
		// enough to find 3 non-english characters and we're good :)
		if (!content) { return false; }
		const matching = content.match(RegexStore.get('hebrew'));
		return !!matching && matching.length >= 3;
	}

	public removeDuplicates(collection) {
		return collection.filter((elem, pos, arr) => {
			return arr.indexOf(elem) === pos;
		});
	}

	public objectToArray(obj = {}) {
		const res = [];

		for (const curr in obj) {
		  res.push(obj[curr]);
		}

		return res;
	}
}

export default new Common();
