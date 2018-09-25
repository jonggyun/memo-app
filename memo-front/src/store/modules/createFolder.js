import { createAction, handleActions } from 'redux-actions';

import * as api from 'lib/api';

// action type
const CREAT_FOLDER = 'CREATE_FOLDER';
const CHANGE_FOLDER_INPUT = 'CHANGE_FOLDER_INPUT';

// action create function
export const createFolder = createAction(CREAT_FOLDER);
export const changeFolderInput = createAction(CHANGE_FOLDER_INPUT);

// 앞에서 입력한 folder라는 객체를 받아와서 api로 back에 넘기기.
export const cFolder = (folder) => {
  return (dispatch) => {
    api.createFolder(folder)
    .then((response) => {
      console.log(response);
      //성공하면 dispatch 날려서 액션 값을 바꾸기
    });
  }
}

// 폴더 이름이 바뀌는 것을 dispatch하는 부분.
export const distpatchFolderName = (folderName) => {
  return (dispatch) => {
    dispatch(changeFolderInput(folderName));
    
  }
}

const initialState = {
  folderName: '',
};

// reducer
// insert에 대한 reducer는 어떻게 만들어야할까?
// 관련 type에 값만 바꾸기?? 값이 바뀌면 insert가 일어난 것이라고 판단하게 만들기?
// 여기서 action은 직접 바꾸면 안되는건가?? 새로운 객체로 return을 해야하는건가?
export default handleActions({ 
  [CREAT_FOLDER]: (state, action) => { // 우리 actionType에는 접두사가 없기에 []를 사용하지 않아도 된다.
    return initialState;
  },
  
  [CHANGE_FOLDER_INPUT]: (state, action) => {
    return {
      folerName: action.payload
    }
  }
}, initialState);