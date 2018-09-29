import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// action type
const FOLDER_MODAL = 'FOLDER_MODAL';

// action create function
export const folderModal = createAction(FOLDER_MODAL);


const initialSate = Map({
  folderModal: Map({
    visible: false
  }),
});

// reducer
export default handleActions({
  FOLDER_MODAL: (state, action) => {
    const visible = action.payload;
    return state.setIn(['folderModal', 'visible'], visible)
  }
}, initialSate);