angular.module('plyFormElements')
.directive('plyTextInput', [function () {
	return {
		restrict: 'E',
		scope: {
			textInputLabel: '=',
			textInputRequired: '=',
			textInputModel: '='
		},
		templateUrl: 'components/ply-form-elements/ply-text-input.template.html',
		link: function (scope, iElement, iAttrs) {
			scope.handleInputChange = function(text) {
				scope.$watch('textInputModel', function(newValue, oldValue, scope) {
					console.log(newValue);	
				});
			};
		}
	};
}])