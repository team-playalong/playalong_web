var dumper = function(toDump) {
	toDump = angular.mock.dump(toDump);
	return dump(toDump);
};