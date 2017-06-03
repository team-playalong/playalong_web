class ChordSearchModel {
  radioInputs = [
    {
      label: 'Artist',
      value: 'artist',
    },
    {
      label: 'Title',
      value: 'title',
    },
  ];

  searchConfig = {
    searchBy: this.radioInputs[0].value,
    searchInput: '',
  };
  searchInput = {
    value: '',
    placeholder: 'Enter Text...',
    required: true,
  };

  setSearchInput = newVal => this.searchConfig.searchInput = newVal;
  setSearchBy = newVal => this.searchConfig.searchBy = newVal;

  // searchBy: {
  //   radioName: 'radio',
  //   inputs: ,
  //   onRadioChanged:
  //   onSearchInputChanged: () => {},
  // };
}

export default ChordSearchModel;
