import * as React from 'react';
import FontAwesome from 'react-fontawesome';

interface RatingProps {
  readonly: boolean;
  max: number;
}

// <p class='help-block'
//    ng-if='chord.countRating && !hasRated'>
//    <span>{{::chord.countRating}}</span>
//    <span translate=".COUNT_RATING_MESSAGE"></span>
// </p>

const defaults = { max: 5, readonly: false };
function renderRatingOptions(props) {
  const options = [];
  let classes;
  const max = props.max || defaults.max;
  for (let i = 0; i < max; i++) {
    classes = `star ${props.value > i ? 'filled' : ''}`;
    options.push((
      <li className={classes} key={i}>
        <FontAwesome
          name='star'
        />
      </li>
    ));
  }
  return options;
}
const Rating = (props: RatingProps = defaults) => {
  const classNames = `rating ${props.readonly ? 'readonly' : ''}`;

  return (
    <div>
      <ul className={classNames}>
        {renderRatingOptions(props)}
      </ul>
    </div>

  );
};

export default Rating;
