import { createAction, handleAction } from 'redux-actions';

import * as api from 'lib/api';

// action type
const CREAT_FOLDER = 'CREATE_FOLDER';

// action create function
export const createFolder = createAction(CREAT_FOLDER);

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

const initialState = [];

// reducer
// insert에 대한 reducer는 어떻게 만들어야할까?
// 관련 type에 값만 바꾸기?? 값이 바뀌면 insert가 일어난 것이라고 판단하게 만들기?
// 여기서 action은 직접 바꾸면 안되는건가?? 새로운 객체로 return을 해야하는건가?
export default handleAction({
  CREAT_FOLDER: (state, action) => {
    console.log('createFolder action');
    console.log(state);
    console.log(action.payload);
    return {
      //payload: action.payload
    }
  }
}, initialState);