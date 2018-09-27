import { createAction, handleActions } from 'redux-actions';

import * as api from 'lib/api';

// action type
const CREAT_FOLDER = 'CREATE_FOLDER';
const CHANGE_FOLDER_INPUT = 'CHANGE_FOLDER_INPUT';

// action create function
export const createFolder = createAction(CREAT_FOLDER);
export const changeFolderInput = createAction(CHANGE_FOLDER_INPUT);

// 앞에서 입력한 folder라는 객체를 받아와서 api로 back에 넘기기.
export const cFolder = ({folderName}) => {
  console.log('in the cFolder', folderName);
  // api.createFolder({folderName})
  //   .then((response) => {
  //     // component를 refresh 해야함    
  //     console.log("response", response);  
  //   })
  //   .catch((error) => {console.log('error') });
}

// 폴더 이름이 바뀌는 것을 dispatch하는 부분.
export const dispatchFolderName = (folderName) => {
  return (dispatch) => {
    dispatch(changeFolderInput(folderName));
  }
}

const initialState = {
  folderName: '',
};

// reducer
export default handleActions({ 
  [CREAT_FOLDER]: (state, action) => { // 우리 actionType에는 접두사가 없기에 []를 사용하지 않아도 된다.
    return initialState;
  },
  
  [CHANGE_FOLDER_INPUT]: (state, action) => {
    return {
      folderName: action.payload
    }
  }
}, initialState);