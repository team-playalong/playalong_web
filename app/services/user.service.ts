user.$inject = ['config', 'PlyFirebase', '$q', 'login'];
function user(config, PlyFirebase, $q, login) {

  function addRemoveFavorites(params) {
    return new Promise((resolve, reject) => {
      if (!login.isLoggedIn()) {
        reject({
          message: 'user is not logged in',
        });
      }
      params = params || {};
      //Get the user's favorite section
      params.chordObj = params.chordObj || {};
      const favoritesRelPath = 'users/' + params.userKey + '/favorites/';

      if (!params.isAddFlag) {
        PlyFirebase.removeWithQuery(favoritesRelPath, 'chordKey', 'equalTo', params.chordObj.chordKey)
        .then(function(data) {
          resolve(data);
        });
      }
      else { //Need to add a new record to the users favorites
        PlyFirebase.insert(favoritesRelPath, {
          chordKey: params.chordObj.chordKey,
          artist: params.chordObj.artist,
          title: params.chordObj.title,
          creationDate: Date.now(),
        })
        .then(function(data) {
          resolve(data);
        });
      }
    });
  }

  function getFavorites(userKey) {
    return new Promise((resolve, reject) => {
      PlyFirebase.getNode({
        relPath: 'users/' + userKey + '/favorites',
        isOnce: true,
      })
      .then(function(data) {
        if (!!data) {
          resolve(data);
        }
        else {
          reject({
            message: 'No favorites found',
          });
        }
      });
    });
  }

  function isChordFavorite(userKey, chordKey) {
    return new Promise((resolve, reject) => {
      const relPath = 'users/' + userKey + '/favorites';
      PlyFirebase.selectSimpleQuery(relPath, 'chordKey', 'equalTo', chordKey)
      .then(function(data) {
        resolve(!!data);
      });
    });
  }

  return {
    addRemoveFavorites,
    getFavorites,
    isChordFavorite,
  };
}

export default user;
