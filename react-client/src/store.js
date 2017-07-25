import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

let combinedReducers = combineReducers({
  stations: reducers.stationsReducer,
  station: reducers.stationReducer,
  platformsAll: reducers.platformsAllReducer,
  platformsSelected: reducers.platformsSelectedReducer,
  routesAll: reducers.routesAllReducer,
});

let appliedMiddleware = applyMiddleware(thunk, logger)

export default createStore(combinedReducers, appliedMiddleware);
