import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as modules from './modules';
import ReduxThunk from 'redux-thunk';

const reducers = combineReducers(modules);

const store = createStore(reducers, applyMiddleware(ReduxThunk));

export default store;