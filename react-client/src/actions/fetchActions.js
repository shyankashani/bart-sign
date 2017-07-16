import axios from 'axios';

export function fetchStations() {
  return dispatch => {
    axios.get('/stations')
    .then(result => { dispatch({ type: 'FETCH_STATIONS', payload: result.data }) })
  }
}

export function fetchPlatforms(station) {
  return dispatch => {
    axios.get('/platforms', { params: { station: station } })
    .then(result => { dispatch({ type: 'FETCH_PLATFORMS', payload: result.data }) })
  }
}

export function fetchRoutes(routes, station) {
  return dispatch => {
    axios.get('/routes', { params: { routes: routes, station: station } })
    .then(result => { dispatch({ type: 'FETCH_ROUTES', payload: result.data }) })
  }
}
