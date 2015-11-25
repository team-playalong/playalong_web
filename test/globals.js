var print = function(toDump) {
	toDump = angular.mock.dump(toDump);
	return dump(toDump);
};