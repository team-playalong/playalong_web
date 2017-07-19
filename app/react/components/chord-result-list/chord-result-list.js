import * as React from 'react';
import { array, func } from 'prop-types';
import styled from 'styled-components';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import PlyImage from 'playalong-components/components/Image';
import Rating from 'playalong-components/components/Rating';

import THEME from '../../helpers/theme';
import ChordResult from '../chord-result/chord-result';

function PlyChordResultList({ chords = [], click }) {
  const ChordResultListComp = styled.div`

  `;

  function renderChordResult(chord, i) {
    return (
      <ChordResult
        key={chord.chordKey}
        chord={chord}
        click={click}
      />
    );
  }

  return (
    <MuiThemeProvider muiTheme={THEME}>
      <ChordResultListComp>
        { chords.map(renderChordResult) }
      </ChordResultListComp>
    </MuiThemeProvider>
  );
}

PlyChordResultList.propTypes = {
  chords: array,
  click: func,
};
export default PlyChordResultList;
