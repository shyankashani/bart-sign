const fetchReducer = (state = {
  stations: [],
  platforms: [],
  routes: []
}, action) => {
  switch(action.type) {
    case 'FETCH_STATIONS':
      state = {
        ...state,
        stations: action.payload
      }
      break;
    case 'FETCH_PLATFORMS':
      state = {
        ...state,
        platforms: action.payload
      }
      break;
    case 'FETCH_ROUTES':
      state = {
        ...state,
        routes: action.payload
      }
      break;
  }
  return state;
}

export default fetchReducer;
