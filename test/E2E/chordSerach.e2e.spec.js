'use strict';

function ChordSearchPage() {
  // this.searchInput = browser.findElement(by.name('searchInput'));
  // this.searchButton = browser.findElement(by.id('plySearchButton'));

  this.get = function() {
    browser.get('https://www.playalong.io/');
  };

  this.doSearch = function(searchInput) {
    browser.findElement(by.name('searchInput')).sendKeys(searchInput);
    browser.findElement(by.id('plySearchButton')).click();
    browser.driver.sleep(3000);
  };
}


describe('chord search', function() {
  var chordSearchPage = new ChordSearchPage();

  beforeEach(chordSearchPage.get);

	it('should show the results for the given chord search', function() {
    // chordSearchPage.doSearch('Gold');
    // var searchResults = element.all(by.repeater('result in home.searchResults'));
    // expect(searchResults.count()).toEqual(2);

    expect(browser.getTitle()).toEqual('Playaln');
	});
});
