import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import BtnIcon from '../btn-icon/BtnIcon';

interface FavoriteBtnProps {
  isFavorite: boolean;
  click?: any;
}

const defaults = {};
const REMOVE_MESSAGE = 'Song in favorites';
const ADD_MESSAGE = 'Click to add to favorites';
const styles = {
  fontSize: '25px',
  color: '#FF4081',
};

function FavoriteBtn(props: FavoriteBtnProps) {
  return (
    <span style={styles}>
      <BtnIcon
        tooltip={props.isFavorite ? REMOVE_MESSAGE : ADD_MESSAGE}
        icon={props.isFavorite ? 'heart' : 'heart-o'}
        click={() => props.click(props.isFavorite)}

      />
    </span>
  );
}
export const props = ['isFavorite', 'click'];
export default FavoriteBtn;
