import axios from 'axios';

const actions = {};

actions.getStations = () => {
  return dispatch => {
    axios.get(`/stations`)
    .then(result => { dispatch({
      type: 'GET_STATIONS',
      payload: result.data
    }) })
  }
}

actions.getPlatforms = station => {
  return dispatch => {
    axios.get(`/platforms/${station}`)
    .then(result => {
      dispatch({
        type: 'SET_STATION',
        payload: station
      })
      dispatch({
        type: 'SET_PLATFORM',
        payload: ''
      })
      dispatch({
        type: 'GET_PLATFORMS',
        payload: result.data
      })
    })
  }
}

actions.getRoutes = (station, platform) => {
  return dispatch => {
    axios.get(`/routes/${station}/${platform}`)
    .then(result => {
      dispatch({
        type: 'SET_PLATFORM',
        payload: platform
      })
      dispatch({
        type: 'GET_ROUTES',
        payload: result.data
      })
    })
  }
}

//
// actions.fetchRoutes = (routes, station) => {
//   return dispatch => {
//     axios.get('/routes', { params: { routes: routes, station: station } })
//     .then(result => { dispatch({
//       type: 'FETCH_ROUTES',
//       payload: result.data
//     }) })
//   }
// }

module.exports = actions;
