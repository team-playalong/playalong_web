(function() {
	'use strict';
	
	resetPassword.$inject = ['login'];
	function resetPassword(login) {
		let ctrl = this;

		ctrl.resetPassword = (email: string) => {
			login.resetPassword(ctrl.email)
			.then(data => {
				ctrl.resetSuccess = true;
				ctrl.resetError = false;
			})
			.catch(error => {
				ctrl.resetSuccess = false;
				ctrl.resetError = true;
			}); 
		};
	}

	ctrl.$inject = ['$mdDialog', 'login', 'paths', 'toast', '$translate'];
	function ctrl($mdDialog, login, paths, toast, $translate) {
		let ctrl = this;
		ctrl.login = login;
		ctrl.paths = paths;
		ctrl.passwordText = 'password';

		ctrl.loginSocial = function(platform) {
		  login.loginSocial(platform)
		  .then(function(){
		  });
		};

		ctrl.setMenuStyles = () => {
			let result = {
				minHeight: '400px',
			};

			if (login.isLoggedIn()) {
				result.minHeight = 'auto';
			}

			return result;
		};


		ctrl.loginEmail = (email: string, password: string) => {
			login.loginEmail(email, password)
				.catch(error => {
					$mdDialog.show(
						$mdDialog.alert()
							.clickOutsideToClose(true)
							.title('Error')
							.content('Invalid email or password')
							.ariaLabel('Invalid Email')
							.ok('OK')
				    );
					});
		};

		ctrl.openResetPasswordModal = (event) => {
			$mdDialog.show({
			  controller: resetPassword,
			  bindToController: true,
			  controllerAs: 'ctrl',
			  template: `
			  	<md-dialog aria-label="Reset Password"
			  		flex="1"
			  	  ng-cloak translate-namespace="toolbar.login">
			  	  <md-toolbar>
			  	    <div class="md-toolbar-tools">
			  	      <h2 translate=".RESET_PASSWORD"></h2>
			  	      <span flex></span>
			  	      <md-button class="md-icon-button" ng-click="ctrl.cancel()">
			  	        &times;
			  	      </md-button>
			  	    </div>
			  	  </md-toolbar>
			  	  <md-dialog-content>
			  	    <div class="md-dialog-content">
			  	      <div layout="row">
			  	      	<div flex="60">
			  	      			<ply-text-input
			  	      	      text-input-label="'.EMAIL'"
			  	      	      text-input-model="ctrl.email">
			  	      	    </ply-text-input>
			  	      	</div>
  			  	    	<div flex="40">
  	  	      			<md-button class="md-primary md-hue-1"
  	  	      			  aria-label="Reset Password"
  	  	      			  translate=".RESET_PASSWORD"
  	  	      			  ng-click="ctrl.resetPassword(ctrl.email)">
  	  	      			</md-button>
  		  	      	</div>
			  	    	</div>
			  	    	<div layout="row">
									<span translate=".RESET_MESSAGE" ng-if="ctrl.resetSuccess"></span>
									<span translate=".RESET_ERROR" ng-if="ctrl.resetError"></span>
			  	    	</div>

		  	    	</div>
			  	  </md-dialog-content>
			  	</md-dialog>
			  `,
			  parent: angular.element(document.body),
			  clickOutsideToClose: true,
			})
			.then(function() {
			}, function() {
			});
			
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