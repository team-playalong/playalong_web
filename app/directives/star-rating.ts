
starRating.$inject = ['Toast', 'chords', '$translate'];
function starRating(toast, chords, $translate) {
  return {
    restrict : 'EA',
    template : `
      <ul class='rating' ng-class='{readonly: readonly}'>
      <li ng-repeat='star in stars' ng-class='star'
      		ng-click='toggle($index)'>
      	<i class='fa fa-star'></i>
      </li>
      </ul>
      <p class='help-block'
      	 ng-if='chord.countRating && !hasRated'>
      	 <span>{{::chord.countRating}}</span>
      	 <span translate=".COUNT_RATING_MESSAGE"></span>
      </p>
    `,
    scope : {
      ratingValue : '=ngModel',
      chord: '=',
      max : '=?', // optional: default is 5
      onRatingSelected : '&?',
      readonly: '=?',
    },
    link(scope) {
      if (scope.max === undefined) { scope.max = 5; }
      function updateStars() {
        scope.stars = [];
        for (let i = 0; i < scope.max; i++) {
          scope.stars.push({
            filled : i < scope.ratingValue,
          });
        }
      }
      scope.toggle = function(index) {
        if (scope.readonly === undefined || scope.readonly === false) {
          scope.ratingValue = index + 1;

          // Rate chord in the db
          chords.rateChord(scope.chord.$id || scope.chord.chordKey, scope.ratingValue)
          .then(() => {
            scope.hasRated = true;
            $translate(['chord.RATING_SUCCESS'])
            .then(translations => {
              toast.showSimpleToast(translations['chord.RATING_SUCCESS'] || 'Thanks For Rating');
            });

          });
        }
      };
      scope.$watch('ratingValue', (oldVal, newVal) => {
        if (newVal) { updateStars(); }
      });
    },
  };
}

export default starRating;
