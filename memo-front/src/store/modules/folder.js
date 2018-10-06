import { createAction, handleActions } from 'redux-actions';
import { Map } from 'immutable';

import * as api from 'lib/api';

// action type
const CREAT_FOLDER = 'CREATE_FOLDER';
const CHANGE_FOLDER_INPUT = 'CHANGE_FOLDER_INPUT';
const DELETE_FOLDER = 'DELETE_FOLDER';
const FOLDER_INFO = 'FOLDER_INFO';

// action create function
// createAction(actionType, function);
export const createFolder = createAction(CREAT_FOLDER, api.createFolder);
export const changeFolderInput = createAction(CHANGE_FOLDER_INPUT);
export const deleteFolder = createAction(DELETE_FOLDER, api.deleteFolder);
export const folderInfo = createAction(FOLDER_INFO);

// 폴더 이름이 바뀌는 것을 dispatch하는 부분.
export const dispatchFolderName = (folderName) => {
  return (dispatch) => {
    dispatch(changeFolderInput(folderName));
  }
}

const initialState = Map({
  id: '',
  folderName: '',
  selected: false
});

// reducer
export default handleActions({ 
  [CREAT_FOLDER]: (state, action) => { // 우리 actionType에는 접두사가 없기에 []를 사용하지 않아도 된다.
    const folderName = action.payload;
    return state.set('folderName', folderName);
  },  
  [CHANGE_FOLDER_INPUT]: (state, action) => {
    const folderName = action.payload;
    return state.set('folderName', folderName)
  },
  [FOLDER_INFO]: (state, action) => {
    const {folderName, id, selected} = action.payload;
    return state.set('folderName', folderName)
                .set('id', id)
                .set('selected', selected)
  },
}, initialState);