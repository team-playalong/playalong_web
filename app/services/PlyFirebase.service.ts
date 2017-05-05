import PLY_CONFIG from '../env';
import { apps } from 'firebase/app';
import { initializeApp, auth, database } from 'firebase';

PlyFirebase.$inject = ['$firebaseObject'];
function PlyFirebase($firebaseObject) {

  // Initialize Firebase
  let config;
  if (PLY_CONFIG.env === 'dev') {
    config = {
      apiKey: 'AIzaSyApdtKEld9C-Hbkr62_o4tOPeZl_qiFfTY',
      authDomain: 'playalong.firebaseapp.com',
      databaseURL: 'https://playalong.firebaseio.com',
      storageBucket: 'project-7489461719706903474.appspot.com',
    };
  }
  else { // prod
    config = {
      apiKey: 'AIzaSyAxl5nYfqR_RQPKD0QI_94PWBhpu0C0Q3M',
      authDomain: 'playalong-prod.firebaseapp.com',
      databaseURL: 'https://playalong-prod.firebaseio.com',
      storageBucket: 'playalong-prod.appspot.com',
    };
  }

  if (!apps || !apps.length) {
    initializeApp(config);
  }

  const getRef = (path: string) => database().ref(path);
  const authentication = auth();

  function selecteByAggregate(relPath: string, fieldName = '', operator = '') {
    fieldName = fieldName.trim();
    operator = operator.trim();
    return new Promise((resolve, reject) => {
      const ref = getRef(relPath);
      ref
        .orderByChild(fieldName)
        .once('value')
        .then(snapshot => {
          resolve(getMax(snapshot, fieldName));
        });
    });
  }

  function getMax(collection, fieldName = '') {
    let max;
    let maxItem;
    let currentItem;

    fieldName = fieldName.trim();
    collection.forEach(curr => {
      currentItem = curr.val();
      if (!max || currentItem[fieldName] > max) {
        max = currentItem[fieldName];
        maxItem = currentItem;
      }
    });

    return maxItem;
  }

  function selectSimpleQuery(relPath = '', fieldName = '', operator = '', fieldValue = '', refFlag: boolean) {
    fieldName = fieldName.trim();
    operator = operator.trim();
    if (typeof fieldValue === 'string') {
      fieldValue = fieldValue.trim();
    }

    return new Promise((resolve, reject) => {
      const ref = getRef(relPath);
      ref
        .orderByChild(fieldName)[operator](fieldValue)
        .once('value')
        .then(snapshot => {
          const res = refFlag ? snapshot : snapshot.val();
          resolve(res);
        });
    });
  };

  function removeWithQuery(relPath = '', fieldName = '', operator = '', fieldValue = '') {
    fieldName = fieldName.trim();
    operator = operator.trim();
    if (typeof fieldValue === 'string') {
      fieldValue = fieldValue.trim();
    }

    return new Promise((resolve, reject) => {
      selectSimpleQuery(relPath, fieldName, operator, fieldValue, true)
        .then((data: any) => {
          if (data.hasChildren()) {
            data.forEach(function(childRef) {
              childRef.ref.remove();
            });
          }
          resolve({
            message: 'success',
          });
        })
        .catch(error => reject(error));
    });
  };

  function insert(relPath = '', dataObj) {
    return new Promise((resolve, reject) => {
      const ref = getRef(relPath);
      if (ref && ref.push) {
        ref.push(dataObj)
        .then(ref => {
          resolve($firebaseObject(ref));
        });
      }
      else {
        setTimeout(reject, 10);
      }
    });

  };

  function getNode(params) {
    return new Promise((resolve, reject) => {
      params = params || {};
      const ref = getRef(params.relPath);
      const response = params.isOnce ? 'once' : 'on';
      ref.once('value')
        .then((snapshot) => {
          if (params.isFirebaseObject) {
            resolve($firebaseObject(snapshot.ref));
          }
          else {
            resolve(snapshot.val());
          }

        })
        .catch(error => {
          reject({ message: 'Node does not exist', error });
        });
    });
  };

  function signOut() {
    return authentication.signOut();
  }

  return {
    authentication,
    googleProvider: new auth.GoogleAuthProvider(),
    facebookProvider: new auth.FacebookAuthProvider(),
    getRef,
    insert,
    selectSimpleQuery,
    removeWithQuery,
    signOut,
    getNode,
    selecteByAggregate,
  };
}

export default PlyFirebase;
