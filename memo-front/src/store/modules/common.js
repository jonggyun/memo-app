import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// action type
const CREATE_FOLDER_MODAL = 'CREATE_FOLDER_MODAL';

// action create function
export const createFolderModal = createAction(CREATE_FOLDER_MODAL);

const initialSate = Map({
  folderModal: Map({
    visible: true
  }),
});

// reducer
export default handleActions({
  CREATE_FOLDER_MODAL: (state, action) => {
    const visible = action.payload;
    return state.setIn(['folderModal', 'visible'], visible)
  }
}, initialSate);