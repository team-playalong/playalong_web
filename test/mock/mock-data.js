/* exported mockData */
var mockData = ( function() {
	function getMockChord() {
		return {
			artist: 'Test Artist',
			title: 'Test Title',
			chordKey: 1
		};
	}
	
	function getMockChordResults() {
		return [getMockChord()];
	}

	return {
		getMockChord: getMockChord,
		getMockChordResults: getMockChordResults
	};
})();