/* eslint no-unused-vars: "off" */
function dumper(toDump) {
	toDump = angular.mock.dump(toDump);
	return dump(toDump);
}
