class ChordSearchModel {
  public searchByOptions = [
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
  ];

  public searchConfig = {
    searchBy: this.searchByOptions[0].value,
    searchInput: '',
  };

  onSearchByChanged = newVal => this.searchConfig.searchBy = newVal;
  onSearchInputChanged = e => console.log(e) // this.searchConfig.searchInput = newVal;
}

export default ChordSearchModel;
