import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import * as modules from './modules';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const reducers = combineReducers(modules);
const logger = createLogger();

// 개발 모드일 때만 redux devtool를 사용한다.
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

const store = createStore(reducers, composeEnhancers(
  applyMiddleware(logger, thunk)
));

export default store;