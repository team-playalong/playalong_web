import * as angular from 'angular';
import Common from './ply-utils/common';

chords.$inject = [
  '$q', 'PlyFirebase', '$firebaseObject',
];

function chords($q: ng.IQService, PlyFirebase, $firebaseObject) {
  const chordsRef = PlyFirebase.getRef('chords');
  // var chordsData = $firebaseArray(ref);

  function increaseChordHitCount(chordKey: string) {
    return new Promise((resolve, reject) => {
      const localRef = chordsRef.child(chordKey);
      localRef.orderByChild('hitCount').once('value')
        .then((snapshot) => {
          const oldHitCount = snapshot.val().hitCount || 0;
          localRef.update({ hitCount: oldHitCount + 1 });
          resolve();
        })
        .catch(error => reject(error));
    });
  }

  function extractApprovedChords(rawData) {
    const result = [];
    // Currently Workaround
    angular.forEach(rawData, function(value, chordKey) {
      if (value.approved) {
        value.chordKey = chordKey;
        result.push(value);
      }
    });

    return result;
  }

  function addChord(chordObj) {
    return new Promise((resolve, reject) => {
      // TODO validate data

      // initialize data
      chordObj.hitCount = 0;
      chordObj.rating = 1;
      chordObj.countRating = 0;
      chordObj.creationDate = Date.now();

      PlyFirebase.insert('chords', chordObj)
      .then(result => resolve(result))
      .catch(error => reject(error));
    });

  }

  function getChordById(params: {chordId: string, isFirebaseObject: boolean}) {
    return PlyFirebase.getNode({
      relPath: `chords/${params.chordId}`,
      isOnce: true,
      isFirebaseObject: params.isFirebaseObject,
    });
  }

  function objectToChordArray(obj = {}) {
		const res = [];
		let currObj;
		for (const curr in obj) {
			currObj = Object.assign({}, { $id: curr, chordKey: curr }, obj[curr]);
		  res.push(currObj);
		}

		return res;
	}

  function searchChordsBy(searchBy = 'artist', searchText) {
    console.log(`Search ${searchText} by ${searchBy}`);
    return new Promise((resolve, reject) => {
      // TODO - data validation
      chordsRef
      .orderByChild(searchBy)
      .startAt(searchText)
      .endAt(`${searchText}~`)
      .once('value')
      .then((snapshot) => {
        // Extract the object
        const rawData = snapshot.val();
        if (!rawData) {
          reject(`No results for query ${searchText} searching by ${searchBy}`);
        }
        const result = objectToChordArray(rawData).filter(curr => !!curr.approved);
        resolve(result);
      });
    });
  }

  function getTopCommon(limitTo, field = 'hitCount') {
    return new Promise((resolve, reject) => {
      // TODO - data validation
      chordsRef
        .orderByChild(field)
        .limitToLast(limitTo)
        .once('value')
        .then(snapshot => {
          // Extract the object
          const rawData = snapshot.val();
          if (!rawData) {
            reject('No results for query getTopChords');
          }
          const result = extractApprovedChords(rawData);
          resolve(result);
        })
        .catch(error => reject(error));
    });
  }

  function getNewestChords(limitTo = 10) {
    return getTopCommon(limitTo, 'creationDate');
  }

  function getTopChords(limitTo = 10) {
    return getTopCommon(limitTo, 'hitCount');
  }

  /**
   * Add a rating to a chord and +1 to the total number of raters
   */
  function rateChord(chordKey, newRating) {
    return new Promise((resolve, reject) => {
      if (newRating < 1 || newRating > 5) {
        reject('Rating value should be between 1 - 5');
      }
      const localRef = PlyFirebase.getRef(`chords/${chordKey}`);
      localRef.once('value')
      .then((snapshot) => {
        const countRating = snapshot.val().countRating || 1;
        let rating = snapshot.val().rating || 1;

        // New weighted average
        rating = ((rating * countRating) + (newRating * 1)) / (countRating + 1);
        rating = Math.round(rating);
        rating = Math.min(rating, 5);
        localRef.child('countRating').set(countRating + 1);
        localRef.child('rating').set(rating);
        return resolve();
      })
      .catch((error) => reject(error));
      // TODO - add the rating to the user as well
    });
  }

  // Public API here
  return {
    addChord,
    getNewestChords,
    getChordById,
    searchChordsBy,
    increaseChordHitCount,
    getTopChords,
    rateChord,
  };
}

export default chords;
