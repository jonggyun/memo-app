import { createAction, handleActions } from 'redux-actions';
//import { Map, List, fromJS } from 'immutable';

import * as api from 'lib/api';

// action type
const GET_FOLDER_LIST = 'GET_FOLDER_LIST';

// action create function
// action type, payload
export const getFolderList = createAction(GET_FOLDER_LIST);
// export const getFolderList = {  
//   type: GET_FOLDER_LIST
// }

export const getFList = () => {
  return (dispatch) => {
      api.getFolderList().then((response) => {
        return response.data;
      }).then((folders) => {
        dispatch(getFolderList(folders));
      })
  }
}

const initialState = [];

// reducer 
// 상태값, 액션
export default handleActions({
  [GET_FOLDER_LIST]: (state, action) => {
    return [
      ...state,
      ...action.payload
    ]
  }
},initialState);
