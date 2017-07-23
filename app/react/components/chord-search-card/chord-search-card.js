import * as React from 'react';
// import { func, object } from 'prop-types';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RadioButtons from 'playalong-components/components/RadioButtons';
import styled from 'styled-components';
import THEME from '../../helpers/theme';



class PlyChordSearchCard extends React.Component {

  constructor(props) {
    super(props);

    this.radioButtonChanged = this.radioButtonChanged.bind(this);
  }

  radioButtonChanged(val) {
    console.log(val);
  }

  radioButtonInputs = [
    {
      label: 'Artist',
      value: 'artist',
    },
    {
      label: 'Title',
      value: 'title',
    },
  ]

  render() {
    const ChordSearchComp = styled.div`

    `;

    return (
      <MuiThemeProvider muiTheme={THEME}>
        <Card>
          <CardHeader
            title="Find Your Song"
          />
          <CardText>
            <ChordSearchComp>
              <form name="chordSearchForm" className="ply-search-form" noValidate>
                <div className="chord-search-row">
                  <RadioButtons
                    inputs={this.radioButtonInputs}
                    onRadioChanged={this.radioButtonChanged}
                  >
                  </RadioButtons>
                  <div flex="60">
                    <text-input
                      label="home.ChordSearchModel.searchInput.label"
                      placeholder="home.ChordSearchModel.searchInput.placeholder"
                      on-change="home.ChordSearchService.onSearchInputChanged"
                    >
                    </text-input>
                  </div>
                  <div flex hide-sm>
                    <ply-button
                      label="'Go'"
                      click="home.searchChords"
                    >
                    </ply-button>
                  </div>
                <div layout="row" layout-align="center left" hide-gt-sm>
                  <ply-button flex
                    label="'Go'"
                    click="home.searchChords"
                  >
                  </ply-button>
                </div>
                <div layout="row">
                  <div flex>
                    <md-button className="md-primary md-hue-1" aria-label="Top Chords" ui-sref="topChords" translate="topChords.PAGE_TITLE"></md-button>
                  </div>
                </div>
              </div>
              </form>
            </ChordSearchComp>
          </CardText>
        </Card>
      </MuiThemeProvider>

    );
  }


}

PlyChordSearchCard.propTypes = {

};
export default PlyChordSearchCard;
