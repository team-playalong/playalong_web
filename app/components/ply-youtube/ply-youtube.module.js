angular.module('plyYoutube', [])
.directive('plyYoutube', [function () {
	return {
		restrict: 'E',
		scope: {
			plyYoutubeWidth: '=',
			plyYoutubeHeight: '=',
			plyYoutubeSrc: '='
		},
		template: '<iframe width="{{plyYoutubeWidth || 300}}" height="{{plyYoutubeHeight || 150}}" src="{{formatterUrl}}" frameborder="0" allowfullscreen></iframe>',
		link: function (scope, iElement, iAttrs) {
			scope.formatterUrl = 'https://www.youtube.com/embed/' + scope.plyYoutubeSrc;
		}
	};
}])