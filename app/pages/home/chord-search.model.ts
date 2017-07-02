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
    label: 'Search Here...',
    value: '',
    placeholder: 'Enter Text...',
    required: true,
  };

  setSearchInput = newVal => this.searchConfig.searchInput = newVal;
  setSearchBy = newVal => this.searchConfig.searchBy = newVal;
}

export default new ChordSearchModel();
