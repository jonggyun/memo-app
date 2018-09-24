import { createStore, applyMiddleware, combineReducers } from 'redux';
import * as modules from './modules';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const reducers = combineReducers(modules);
const logger = createLogger();

const store = createStore(reducers, applyMiddleware(logger, thunk));

export default store;