import * as angular from 'angular';
import { Paths } from '../../../config/config.constants';

resetPassword.$inject = ['login', '$mdDialog'];
function resetPassword(login, $mdDialog) {
	const ctrl = this;
	ctrl.$mdDialog = $mdDialog;

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

changePassword.$inject = ['login', '$mdDialog'];
function changePassword(login, $mdDialog) {
	const ctrl = this;
	ctrl.$mdDialog = $mdDialog;

	ctrl.passwordType = 'password';
	ctrl.emailType = 'email';

	ctrl.changePassword = (email: string, oldPassword: string, newPassword: string) => {
		login.changePassword(email, oldPassword, newPassword)
		.then(data => {
			ctrl.changeSuccess = true;
			ctrl.changeError = false;
		})
		.catch(error => {
			ctrl.changeSuccess = false;
			ctrl.changeError = true;
		});
	};
}

ctrl.$inject = ['$mdDialog', 'login', '$translate', 'PlyNotifier'];
function ctrl($mdDialog, login, $translate, PlyNotifier) {
	const ctrl = this;
	ctrl.login = login;
	ctrl.paths = Paths;

	ctrl.$onInit = () => {
		ctrl.passwordText = 'password';
	};

	ctrl.loginSocial = function(platform) {
	  login.loginSocial(platform)
	  .then(user => {
      if (user.user && user.user.providerData && user.user.providerData.length) {
        const userData = user.user.providerData[0];
        PlyNotifier.notifyLogin(userData);
      }

	  });
	};

	ctrl.setMenuStyles = () => {
		const result = {
			minHeight: '85px',
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
						.ok('OK'),
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
		  	      <md-button class="md-icon-button" ng-click="ctrl.$mdDialog.cancel()">
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
		});
	};

	ctrl.openChangePasswordModal = (event) => {
		$mdDialog.show({
		  controller: changePassword,
		  bindToController: true,
		  controllerAs: 'ctrl',
		  template: `
		  	<md-dialog aria-label="Change Password"
		  		flex="1"
		  	  ng-cloak translate-namespace="toolbar.login">
		  	  <md-toolbar>
		  	    <div class="md-toolbar-tools">
		  	      <h2 translate=".CHANGE_PASSWORD"></h2>
		  	      <span flex></span>
		  	      <md-button class="md-icon-button" ng-click="ctrl.$mdDialog.cancel()">
		  	        &times;
		  	      </md-button>
		  	    </div>
		  	  </md-toolbar>
		  	  <md-dialog-content>
		  	    <div class="md-dialog-content">
		  	    <form name="changePassword">
		  	      <div layout="row" layout-sm="column">
		  	      	<div flex="2">
		  	      			<ply-text-input
		  	      				text-input-type="ctrl.emailType"
		  	      	      text-input-label="'.EMAIL'"
		  	      	      text-input-model="ctrl.email">
		  	      	    </ply-text-input>
		  	      	</div>
		  	      	<div flex="2">
		  	      			<ply-text-input
		  	      				text-input-type="ctrl.passwordType"
		  	      	      text-input-label="'.OLD_PASSWORD'"
		  	      	      text-input-model="ctrl.oldPassword">
		  	      	    </ply-text-input>
		  	      	</div>
		  	      	<div flex="2">
		  	      			<ply-text-input
		  	      				text-input-type="ctrl.passwordType"
		  	      	      text-input-label="'.NEW_PASSWORD'"
		  	      	      text-input-model="ctrl.newPassword">
		  	      	    </ply-text-input>
		  	      	</div>
			  	    	<div flex="1">
	  	      			<md-button class="md-raised md-hue-1"
	  	      			  aria-label="Change Password"
	  	      			  translate=".CHANGE_PASSWORD"
	  	      			  ng-click="ctrl.changePassword(ctrl.email, ctrl.oldPassword, ctrl.newPassword)">
	  	      			</md-button>
		  	      	</div>
		  	    	</div>
		  	    	<div layout="row">
								<span translate=".CHANGE_MESSAGE" ng-if="ctrl.changeSuccess"></span>
								<span translate=".CHANGE_ERROR" ng-if="ctrl.changeError"></span>
		  	    	</div>
		  	    </form>


	  	    	</div>
		  	  </md-dialog-content>
		  	</md-dialog>
		  `,
		  parent: angular.element(document.body),
		  clickOutsideToClose: true,
		});
	};

  const DEFAULT_AVATAR_IMAGE = 'http://static1.squarespace.com/static/5446859fe4b00f6c90e96077/t/54ca8f77e4b06817122e0839/1422561145086/Horton.jpg';
	ctrl.setAvatarImage = () => {
	  if (!login.isLoggedIn()) {
      return DEFAULT_AVATAR_IMAGE;
	  }
	  else { // get the image from the auth object
	    const auth = login.getAuth() || {};
      if (auth.photoURL) {
        return auth.photoURL;
      }
      else if (auth.providerData && auth.providerData[0]) {
        return auth.providerData[0].photoURL;
      }
      return DEFAULT_AVATAR_IMAGE;
	  }
	};
}
const plyAvatarMenu = {
	templateUrl: './app/components/ply-toolbar/avatar-menu/ply-avatar-menu.component.html',
	controller: ctrl,
	controllerAs: 'ctrl',
};

export default plyAvatarMenu;
