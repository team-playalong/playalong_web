import * as React from 'react';
import FontAwesome from 'react-fontawesome';

interface RatingProps {
  readonly: boolean;
  max: number;
  value: number;
  click?: any;
}

const defaults = { max: 5, readonly: false, value: null };

const Rating = (props: RatingProps = defaults) => {
  const classNames = `rating ${props.readonly ? 'readonly' : ''}`;

  function renderRatingOptions(props) {
    const options = [];
    let classes;
    const max = props.max || defaults.max;
    for (let i = 0; i < max; i++) {
      classes = `
        star
        ${props.value > i ? 'filled' : ''}
        ${props.readonly ? 'non-clickable' : ''}
      `;
      options.push((
        <li
          className={classes}
          key={i}
          onClick={() => ratingOptionClicked(i + 1)}
        >
          <FontAwesome
            name='star'
          />
        </li>
      ));
    }
    return options;
  }

  function ratingOptionClicked(val) {
    if (!props.readonly && typeof props.click === 'function') {
      props.click(val);
    }
  }

  return (
    <div>
      <ul className={classNames}>
        {renderRatingOptions(props)}
      </ul>
    </div>

  );
};

export const props = ['readonly', 'max', 'value', 'click'];

export default Rating;
