import * as angular from 'angular';
/**
 * @ngdoc service
 * @name playalongservicesApp.transposer
 * @description
 * # transposer
 * Service in the playalongservicesApp.
 */

export const ChordTranposeMap = {
	F: {
		prev: 'E',
		next: 'F#',
	},
	'F#': {
		prev: 'F',
		next: 'G',
	},
	G: {
		prev: 'F#',
		next: 'G#',
	},
	'G#': {
		prev: 'G',
		next: 'A',
	},
	A: {
		prev: 'G#',
		next: 'Bb',
	},
	Bb: {
		prev: 'A',
		next: 'B',
	},
	B: {
		prev: 'Bb',
		next: 'C',
	},
	C: {
		prev: 'B',
		next: 'C#',
	},
	'C#': {
		prev: 'C',
		next: 'D',
	},
	D: {
		prev: 'C#',
		next: 'Eb',
	},
	Eb: {
		prev: 'D',
		next: 'E',
	},
	E: {
		prev: 'Eb',
		next: 'F',
	},
};

export const EqualChordsMap = {
	'A#': 'Bb',
	Ab: 'G#',
	Db: 'C#',
	'D#': 'Eb',
};

transposer.$inject = ['ChordTranposeMap', 'EqualChordsMap', 'RegexStore'];
export function transposer(ChordTranposeMap, EqualChordsMap, RegexStore) {
	const getEqualChord = function(chord) {
		return EqualChordsMap[chord] || chord;
	};

	const transpose = function(chord, numTones) {
		const oldChord = angular.copy(chord);
		const chordRegex = RegexStore.get('basicChord');
		//Extract what needs to be transposed
		chord = chord.match(chordRegex);

		if (!chord || !numTones || typeof numTones !== 'number')
		{
			return null;
		}
		const direction = numTones < 0 ? 'prev' : 'next';
		numTones = Math.abs(numTones);

		for (let i = 0; i < numTones; i++) {
			chord = getEqualChord(chord);
			if (ChordTranposeMap[chord] && ChordTranposeMap[chord][direction])
			{
				chord = ChordTranposeMap[chord][direction];
			}
			else {
				return null;
			}

		}

		return oldChord.replace(RegexStore.get('basicChord'), chord);

	};
	return {
		transpose,
		getEqualChord,
	};
}
