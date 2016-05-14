(function() {
	'use strict';
	
	ctrl.$inject = ['$mdDialog', 'login', 'paths'];
	function ctrl($mdDialog, login, paths) {
		let ctrl = this;
		ctrl.login = login;
		ctrl.paths = paths;

		ctrl.loginSocial = function(platform) {
		  login.loginSocial(platform)
		  .then(function(/*data*/){
		  });
		};

		ctrl.setMenuStyles = () => {
			let result = {
				height: '300px',
			};

			if (login.isLoggedIn()) {
				result.height = 'auto';
			}

			return result;
		};

		ctrl.setAvatarImage = function() {
		  if (!login.isLoggedIn()) {
		    return paths.images.emptyAvatar;
		  }
		  else { //get the image from the auth object
		    let auth = login.getAuth();
		    if (auth && auth.provider) {
		      return auth[auth.provider].profileImageURL;
		    }
		  }
		};
	}

	angular.module('playalongWebApp')
		.component('plyAvatarMenu', {
			templateUrl: 'components/ply-avatar-menu.component.html',
			controller: ctrl,
			controllerAs: 'ctrl',
		});

})();