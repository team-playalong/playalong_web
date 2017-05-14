class ChordSearchModel {
  public searchBy = {
    radioName: 'radio',
    inputs: [
      {
        // label: 'home.ARTIST',
        label: 'Artist',
        value: 'artist',
      },
      {
        // label: 'home.SONG_NAME',
        label: 'Title',
        value: 'title',
      },
    ],
    onRadioChanged: newVal => this.searchConfig.searchBy = newVal,
    onSearchInputChanged: () => {},
  };
  public searchConfig = {
    searchBy: this.searchBy.inputs[0].value,
    searchInput: '',
  };

  public searchInput = {
    value: this.searchConfig.searchInput,
    placeholder: 'Enter Text...',
    onChange: newVal => this.searchConfig.searchInput = newVal,
    required: true,
  };




}

export default ChordSearchModel;
