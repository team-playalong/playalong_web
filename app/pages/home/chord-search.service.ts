import ChordSearchModel from './chord-search.model';

class ChordSearchService {
  constructor(private ChordSearchModel: ChordSearchModel) {}

  public onRadioChanged = newVal => this.ChordSearchModel.setSearchBy(newVal);
  public onSearchInputChanged = newVal => this.ChordSearchModel.setSearchInput(newVal);
}
ChordSearchService.$inject = ['ChordSearchModel'];

export default ChordSearchService;
