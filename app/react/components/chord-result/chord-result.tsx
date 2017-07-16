import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import PlyImage from 'playalong-components/components/Image';
import Rating from 'playalong-components/components/Rating';

import THEME from '../../helpers/theme';

interface Chord {
  artist: string;
  title: string;
  hitCount?: number;
  imagePath?: string;
  rating?: number;
}

interface ChordResultProps {
  click?: any;
  chord: Chord;
}

export function renderHitCount(hitCount) {
  return (
    <div>{`Viewed ${hitCount} time${hitCount > 1 ? 's' : ''}`}</div>
  );
}

function PlyChordResult(props: ChordResultProps) {
  const ChordResultComp = styled.div`
    height: 120px;
    position: relative;
    cursor: pointer;
    p {
      margin: 0;
    }
    img {
      float: left;
      margin-right: 10px;
    }
    hr {
      position: absolute;
      bottom: 0;
      height: 1px;
      width: 100%;
    }
  `;

  return (
    <MuiThemeProvider muiTheme={THEME}>
      <ChordResultComp onClick={() => props.click(props.chord)}>
        {props.chord.imagePath &&
          <PlyImage
            type='avatar'
            height='90px'
            width='90px'
            src={props.chord.imagePath}
          />
        }
        <h4>{props.chord.artist}</h4>
        <p>{props.chord.title}</p>
        {renderHitCount(props.chord.hitCount)}
        <Rating readonly={true} value={props.chord.rating} />
        <hr />
      </ChordResultComp>
    </MuiThemeProvider >
  );
}

export const props = ['chord', 'click'];
export default PlyChordResult;
