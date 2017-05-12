plyYoutube.$inject = ['RegexStore'];

function plyYoutube(RegexStore) {
	return {
		restrict: 'E',
		scope: {
			plyYoutubeWidth: '=',
			plyYoutubeHeight: '=',
			plyYoutubeSrc: '=',
		},
		template: '<iframe id="plyYoutubeIframe" width="{{plyYoutubeWidth || 300}}" height="{{plyYoutubeHeight || 150}}" src="{{formatterUrl}}" frameborder="0" allowfullscreen></iframe>',
		link(scope, iElement, iAttrs) {
			scope.formatterUrl = 'https://www.youtube.com/embed/' + scope.plyYoutubeSrc;
      const mobileRegex = RegexStore.get('mobile');
      const iframe = iElement.find('#plyYoutubeIframe');
      if (mobileRegex.test(navigator.userAgent)) {
      	iframe.css('width', '100%');
      }
		},
	};
}

export default plyYoutube;
