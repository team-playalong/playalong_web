'use strict';

app.constant('paths', {
	images: {
		logo: 'images/plyIcon.png',
		emptyAvatar: './images/avatar.png',
		flags: './images/flags.png',
	},
})
.constant('Facebook',
{
	appId: 541650972649460,
	appName: 'Playalong - Amazing Chords',
	description: 'Playalong is an awesome chord editing and playing app',
});

app.run(['paths', 'Facebook', '$rootScope',
	function (paths, Facebook, $rootScope) {
	$rootScope.paths = paths;
	$rootScope.Facebook = Facebook;
}]);
