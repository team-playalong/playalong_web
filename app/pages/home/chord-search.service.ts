import ChordSearchModel from './chord-search.model';

class ChordSearchService {

  public onRadioChanged = newVal => ChordSearchModel.setSearchBy(newVal);
  public onSearchInputChanged = newVal => ChordSearchModel.setSearchInput(newVal);
}

export default new ChordSearchService();
