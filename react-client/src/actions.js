import axios from 'axios';

const actions = {};

actions.fetchStations = () => {
  return dispatch => {
    axios.get('/stations')
    .then(result => { dispatch({
      type: 'FETCH_STATIONS',
      payload: result.data
    }) })
  }
}

actions.fetchPlatforms = station => {
  return dispatch => {
    axios.get('/stationInfo', { params: { station: station } })
    .then(result => { dispatch({
      type: 'FETCH_PLATFORMS',
      payload: result.data
    }) })
  }
}

actions.fetchRoutes = (routes, station) => {
  return dispatch => {
    axios.get('/routes', { params: { routes: routes, station: station } })
    .then(result => { dispatch({
      type: 'FETCH_ROUTES',
      payload: result.data
    }) })
  }
}

module.exports = actions;
