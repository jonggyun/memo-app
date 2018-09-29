import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

// action type
const FOLDER_MODAL = 'FOLDER_MODAL';
const FOLDER_INFO = 'FOLDER_INFO';

// action create function
export const folderModal = createAction(FOLDER_MODAL);
export const folderInfo = createAction(FOLDER_INFO);

const initialSate = Map({
  folderModal: Map({
    visible: false,
    type: '',
    complete: false,
  }),
  folderInfo: Map({
    id: '',
    folderName: ''
  })
});

// reducer
export default handleActions({
  FOLDER_MODAL: (state, action) => {
    const { visible, type, complete } = action.payload;
    return state.setIn(['folderModal', 'visible'], visible)
                .setIn(['folderModal', 'type'], type)
                .setIn(['folderModal', 'complete'], complete)
  },
  FOLDER_INFO: (state, action) => {
    const { id, folderName } = action.payload;
    return state.setIn(['folderInfo', 'id'], id)
                .setIn(['folderInfo', 'folderName'], folderName)
  }
}, initialSate);