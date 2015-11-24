'use strict';

var ChordSearchPage = function() {
  this.searchInput = element(by.model('searchConfig.searchInput'));
  this.searchButton = element(by.id('plySearchButton'));

  this.get = function() {
    browser.get('http://localhost:9000');
    browser.driver.sleep(3000);
  };

  this.doSearch = function(searchInput) {
    this.searchInput.sendKeys(searchInput);
    this.searchButton.click();  
    browser.driver.sleep(3000);
  };
};


describe('chord search', function() {
  var chordSearchPage = new ChordSearchPage();

  beforeEach(chordSearchPage.get);

	it('should show the results for the given chord search', function() {    
    chordSearchPage.doSearch('Gold');
    var searchResults = element.all(by.repeater('result in searchResults'));
	  expect(searchResults.count()).toEqual(2);
	});
});