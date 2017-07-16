import {createStore, combineReducers, applyMiddleware} from 'redux';
import fetchReducer from './reducers/fetchReducer.js';
import selectReducer from './reducers/selectReducer.js';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export default createStore(combineReducers({fetchReducer, selectReducer}), applyMiddleware(thunk, logger));
