/* exported mockData */
var mockData = ( function() {
	function getMockChord() {
		return {
			artist: 'Test Artist',
			title: 'Test Title',
			chordKey: 1,
			content: '<div>hello</div>'
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
			},
			userKey: 1
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

	var getMockFavorites = function() {
		return {
			1: {
				artist:'Dadi',
				title: 'test'
			},
			2: {
				artist:'Dadi2',
				title: 'test2'
			}
		}
	};

	return {
		getMockChord: getMockChord,
		getMockChordResults: getMockChordResults,
		getMockGoogleUser: getMockGoogleUser,
		getMockFacebookUser: getMockFacebookUser,
		getMockFavorites:getMockFavorites
	};
})();