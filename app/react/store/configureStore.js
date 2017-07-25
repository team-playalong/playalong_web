import { createStore, compose, applyMiddleware } from 'redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant'; // e
import createSagaMiddleware from 'redux-saga';
import rootReducer from '../reducers';
import sagas from '../sagas';

let mStore;
const sagaMiddleware = createSagaMiddleware();

function configureStoreProd(initialState) {
  const middlewares = [ sagaMiddleware ];
  return createStore(
    rootReducer,
    initialState || {},
    compose(applyMiddleware(...middlewares))
  );
}

function configureStoreDev(initialState) {
  const middlewares = [
    reduxImmutableStateInvariant(),
    sagaMiddleware,
  ];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(
    rootReducer,
    initialState || {},
    composeEnhancers(applyMiddleware(...middlewares))
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default; // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}

export function getStore() {
  return mStore;
}

export default function (initialState) {
  if (!mStore) {
    const storeConfigFunction = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;
    mStore = storeConfigFunction(initialState);
    sagaMiddleware.run(sagas);
  }
  return mStore;
}
