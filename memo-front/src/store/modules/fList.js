import { createAction, handleActions } from 'redux-actions';
import { Map, List, fromJS } from 'immutable';

import * as api from 'lib/api';

// action type
const GET_FOLDER_LIST = 'fList/GET_FOLDER_LIST';

// action create function
// action type, payload
export const getFolderList = createAction(GET_FOLDER_LIST, api.getFolderList);

const initialState = List([
  Map({ 
    id: "",
    name: "", 
  })
]);

// reducer 
// 상태값, 액션
export default handleActions({
  [GET_FOLDER_LIST]: (state, action) => {
    const { _id, name } = action.payload;
    console.log("_id",_id);
    console.log("name",name);
    return state.push(Map({
      id : _id,
      name,
    }));
  },
}, initialState);
