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

	function getMockGoogleUser() {
		return {
			provider: 'facebook',
			facebook: {
				profileImageURL: 'myGoogleImagePath.png'
			}
		};
	}

	function getMockFacebookUser() {
		return {
			provider: 'facebook',
			facebook: {
				profileImageURL: 'myImagePath.png'
			}
		};
	}

	return {
		getMockChord: getMockChord,
		getMockChordResults: getMockChordResults,
		getMockGoogleUser: getMockGoogleUser,
		getMockFacebookUser: getMockFacebookUser
	};
})();