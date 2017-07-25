import { put, takeEvery } from 'redux-saga/effects'
import { SEARCH_CHORDS } from '../constants/actionTypes';

function* chordsSearchSagaHandler(action) {
   try {
     console.log('Yo!');
    //  const initalCustomParams = fetchCustomParamsFromQueryString();
    //  yield assignCustomParamsValues(initalCustomParams);
    //  const customParamOnsiteDefs = getCustomParams();
    //  const mergedState = mergeCustomParamsState(initalCustomParams, customParamOnsiteDefs);
    //  yield put(setCustomParamsState(mergedState));
   } catch (e) {

   }
}

function* chordsSearchSaga() {
  yield takeEvery(SEARCH_CHORDS, chordsSearchSagaHandler);
}

export default chordsSearchSaga;
