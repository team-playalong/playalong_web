/* exported mockData */
var mockData = ( function() {
	function getMockChord() {
		return {
			artist: 'Test Artist',
			title: 'Test Title'
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