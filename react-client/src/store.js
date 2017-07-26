import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

let combinedReducers = combineReducers({
  stations: reducers.stationsReducer,
  station: reducers.stationReducer,
  platforms: reducers.platformsReducer,
  platform: reducers.platformReducer,
  routes: reducers.routesReducer,
});

let appliedMiddleware = applyMiddleware(thunk, logger);

export default createStore(combinedReducers, appliedMiddleware);
