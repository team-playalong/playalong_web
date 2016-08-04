'use strict';
app.directive("starRating", ['toast', 'chords', '$translate', function (toast, chords, $translate) {
        return {
            restrict: "EA",
            templateUrl: 'views/templates/star-rating.html',
            scope: {
                ratingValue: "=ngModel",
                chord: "=",
                max: "=?",
                onRatingSelected: "&?",
                readonly: "=?"
            },
            link: function (scope) {
                if (scope.max === undefined) {
                    scope.max = 5;
                }
                function updateStars() {
                    scope.stars = [];
                    for (var i = 0; i < scope.max; i++) {
                        scope.stars.push({
                            filled: i < scope.ratingValue
                        });
                    }
                }
                scope.toggle = function (index) {
                    if (scope.readonly === undefined || scope.readonly === false) {
                        scope.ratingValue = index + 1;
                        //Rate chord in the db
                        chords.rateChord(scope.chord.$id || scope.chord.chordKey, scope.ratingValue)
                            .then(function () {
                            scope.hasRated = true;
                            $translate(['chord.RATING_SUCCESS'])
                                .then(function (translations) {
                                toast.showSimpleToast(translations['chord.RATING_SUCCESS'] || 'Thanks For Rating');
                            });
                        });
                    }
                };
                scope.$watch("ratingValue", function (oldVal, newVal) {
                    if (newVal) {
                        updateStars();
                    }
                });
            }
        };
    }]);
//# sourceMappingURL=star-rating.js.map