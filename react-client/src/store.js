import { createStore, combineReducers, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();
const routund = routerMiddleware(history);

let combinedReducers = combineReducers({
  stations: reducers.stationsReducer,
  station: reducers.stationReducer,
  platforms: reducers.platformsReducer,
  platform: reducers.platformReducer,
  routes: reducers.routesReducer,
  router: routerReducer
});

let appliedMiddleware = applyMiddleware(thunk, logger, routund);

export const store = createStore(combinedReducers, appliedMiddleware);
