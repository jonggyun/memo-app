import { createAction, handleActions } from 'redux-actions';

import * as api from 'lib/api';

// action Type
const GET_MEMO_LIST = 'GET_MEMO_LIST';

// action function
// createAction(actionType, function)
export const getMemoList = createAction(GET_MEMO_LIST);

export const memoList = ({id}) => {
  // api.getMemoList({id}).then(response => console.log('inthe memo modules',response.data));
  return (dispatch) => {
    api.getMemoList({id}).then(response => {
      return response.data;
    }).then(memoList => {
      dispatch(getMemoList(memoList));
    });
  }
}

// initialize
const initialState = {
  id: '',
  memoList : null
};

// reducer
export default handleActions({
  GET_MEMO_LIST: (state, action) => {
    return { memoList: action.payload }
  }
}, initialState);