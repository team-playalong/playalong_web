import initialState from './initial-state';
import { SET_CHORD_RESULTS } from '../constants/ActionTypes';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function chordsReducer(state = initialState.chords, action) {

  switch (action.type) {
    case SET_CHORD_RESULTS:
      return Object.assign({}, state, { searchResults: action.chords });
    default:
      return state;
  }
}
