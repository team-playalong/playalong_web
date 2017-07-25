import * as React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RadioButtons from 'playalong-components/components/RadioButtons';
import PlyButton from 'playalong-components/components/Button';
import { func } from 'prop-types';
import TextInput from 'playalong-components/components/TextInput';
import THEME from '../../helpers/theme';

class PlyChordSearchCard extends React.Component {

  constructor(props) {
    super(props);

    this.searchInputChanged = this.searchInputChanged.bind(this);
    this.radioButtonChanged = this.radioButtonChanged.bind(this);
    this.searchButtonClicked = this.searchButtonClicked.bind(this);
    this.searchFormSubmitted = this.searchFormSubmitted.bind(this);
  }

  componentWillMount() {
    this.setState({
      searchBy: 'artist',
      searchInput: '',
    });
  }

  searchFormSubmitted(e) {
    e.preventDefault();
    this.searchButtonClicked();
  }

  radioButtonChanged(searchBy) {
    this.setState({ searchBy });
  }

  searchInputChanged(searchInput) {
    this.setState({ searchInput });
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

  searchButtonClicked() {
    if (typeof this.props.onChordSearchClicked === 'function') {
      this.props.onChordSearchClicked({
        searchBy: this.state.searchBy,
        searchInput: this.state.searchInput,
      });
    }
  }

  styles = {
    form: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexFlow: 'row wrap',
    },
    radioButtons: {
      flex: '1',
      paddingBottom: '10px',
    },
    searchInput: {
      flex: '4',
      paddingBottom: '10px',
    },
    searchButton: {
      flex: '1',
      paddingBottom: '10px',
    },
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={THEME}>
          <Card>
            <CardHeader
              title="Find Your Song"
            />
            <CardText>
              <form
                name="chordSearchForm"
                style={this.styles.form}
                noValidate
                onSubmit={this.searchFormSubmitted}>

                <span style={this.styles.radioButtons}>
                  <RadioButtons
                    inputs={this.radioButtonInputs}
                    onRadioChanged={this.radioButtonChanged}
                  />
                </span>
                <span style={this.styles.searchInput}>
                  <TextInput
                    name="searchInput"
                    placeholder={'...'}
                    onChange={this.searchInputChanged}
                  />
                </span>
                <span style={this.styles.searchButton}>
                <PlyButton
                  label='Go'
                  click={this.searchButtonClicked}
                />
                </span>

              </form>
            </CardText>
          </Card>

      </MuiThemeProvider>

    );
  }
}

PlyChordSearchCard.propTypes = {
  onChordSearchClicked: func,
}

export default PlyChordSearchCard;
