import * as React from 'react';
import FontAwesome from 'react-fontawesome';
import BtnIcon from '../btn-icon/BtnIcon';

interface FavoriteBtnProps {
  isFavorite: boolean;
  click?: any;
}

interface FavoriteBtnState {
  isFavorite: boolean;
  click: any;
}

const defaults = {};
const REMOVE_MESSAGE = 'Song in favorites';
const ADD_MESSAGE = 'Click to add to favorites';
const styles = {
  fontSize: '25px',
  color: '#FF4081',
};

class FavoriteBtn extends React.Component < FavoriteBtnProps, FavoriteBtnState > {
  constructor(props) {
    super(props);
    this.onFavoritesClicked = this.onFavoritesClicked.bind(this);
  }

  componentWillMount() {
    this.setState({
      isFavorite: !!this.props.isFavorite,
    });
  }

  onFavoritesClicked() {
    this.setState({
      isFavorite: !this.state.isFavorite,
    });
    if (typeof this.props.click === 'function') {
      this.props.click(this.props.isFavorite);
    }
  }

  render() {
    return (
      <span style={styles}>
        <BtnIcon
          tooltip={this.props.isFavorite ? REMOVE_MESSAGE : ADD_MESSAGE}
          icon={this.props.isFavorite ? 'heart' : 'heart-o'}
          click={() => this.props.click(this.props.isFavorite)}

        />
      </span>
    );
  }
}

export const props = ['isFavorite', 'click'];
export default FavoriteBtn;
