angular.module('plyYoutube', [])
.directive('plyYoutube', [function () {
	return {
		restrict: 'E',
		scope: {
			plyYoutubeWidth: '=',
			plyYoutubeHeight: '=',
			plyYoutubeSrc: '='
		},
		template: '<iframe width="{{plyYoutubeWidth || 300}}" height="{{plyYoutubeHeight || 150}}" src="{{plyYoutubeSrc}}" frameborder="0" allowfullscreen></iframe>',
		link: function (scope, iElement, iAttrs) {
		}
	};
}])