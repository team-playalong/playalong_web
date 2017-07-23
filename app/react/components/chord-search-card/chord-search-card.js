import * as React from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RadioButtons from 'playalong-components/components/RadioButtons';
import TextInput from 'playalong-components/components/TextInput';
import THEME from '../../helpers/theme';

class PlyChordSearchCard extends React.Component {

  constructor(props) {
    super(props);

    this.searchInputChanged = this.searchInputChanged.bind(this);
    this.radioButtonChanged = this.radioButtonChanged.bind(this);
  }

  styles = {
    form: {
      display: 'flex',
      alignItems: 'center',
    }
  }

  componentWillMount() {
    this.setState({
      searchBy: '',
      searchInput: '',
    });
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

  render() {
    return (
      <MuiThemeProvider muiTheme={THEME}>
          <Card>
            <CardHeader
              title="Find Your Song"
            />
            <CardText>
              <form name="chordSearchForm" style={this.styles.form} noValidate>
                <TextInput
                  name="searchInput"
                  placeholder={'Search Here...'}
                  onChange={this.searchInputChanged}
                />
              </form>
            </CardText>
          </Card>

      </MuiThemeProvider>

    );
  }


}
// <RadioButtons
//   inputs={this.radioButtonInputs}
//   onRadioChanged={this.radioButtonChanged}
// />

export default PlyChordSearchCard;
