const plyTextInput = {
	restrict: 'E',
	bindings: {
		textInputLabel: '=',
		textInputRequired: '@',
		textInputType: '=',
		textInputPlaceholder: '=',
		textInputName: '@',
		textInputModel: '=',
	},
	controller: ['$scope', function($scope) {
		this.handleInputChange = function(text) {
			$scope.$watch('textInputModel', function(newValue, oldValue, scope) {
				console.log(newValue);
			});
		};
	}],
	template: `
		<md-input-container ng-form="{{$ctrl.textInputName}}" flex>
			<label translate="{{textInputLabel}}"></label>
			<input 	ng-required="textInputRequired || false"
				type="{{textInputType || 'text'}}"
				ng-model="textInputModel"
				auto-direction />
				<div ng-messages="chordSearchForm.searchInput.$error">
					<!-- TODO - Messages from texts object -->
					<div ng-if="chordSearchForm.searchInput.$dirty && chordSearchForm.searchInput.$invalid && chordSearchForm.searchInput.$error" ng-message="required">{{'globals.errors.REQUIRED' | translate}}</div>
				</div>
{{testMe}}
		</md-input-container>
	`,
};

export default plyTextInput;
