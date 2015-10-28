'use strict';

app.directive("starRating", ['toast','chords', function(toast,chords) {
  return {
    restrict : "EA",
    template : "<ul class='rating' ng-class='{readonly: readonly}'>" +
               "  <li ng-repeat='star in stars' ng-class='star' ng-click='toggle($index)'>" +
               "    <i class='fa fa-star'></i>" + //&#9733
               "  </li>" +
               "</ul>" +
               "<p class='help-block' ng-if='chord.countRating && !hasRated'>" +
               "  {{chord.countRating}} people have rated this. Be one of them :)" +
               "</p>",
    scope : {
      ratingValue : "=ngModel",
      chord: "=",
      max : "=?", //optional: default is 5
      onRatingSelected : "&?",
      readonly: "=?"
    },
    link : function(scope) {
      if (scope.max === undefined) { scope.max = 5; }
      function updateStars() {
        scope.stars = [];
        for (var i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled : i < scope.ratingValue
          });
        }
      }
      scope.toggle = function(index) {
        if (scope.readonly === undefined || scope.readonly === false){
          scope.ratingValue = index + 1;

          //Rate chord in the db
          chords.rateChord(scope.chord.$id || scope.chord.chordKey,scope.ratingValue)
            .then(function() {
              scope.hasRated = true;
              toast.showSimpleToast('Thanks For Rating');
            });
          }
      };
      scope.$watch("ratingValue", function(oldVal, newVal) {
        if (newVal) { updateStars(); }
      });
    }
  };
}]);
