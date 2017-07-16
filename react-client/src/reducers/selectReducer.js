const selectReducer = (state = {
  station: '12TH',
  platform: '1'
}, action) => {
  switch(action.type) {
    case 'SELECT_STATION':
      state = {
        ...state,
        station: action.payload
      }
      break;
    case 'SELECT_PLATFORM':
      state = {
        ...state,
        platform: action.payload
      }
      break;
  }
  return state;
}

export default selectReducer;
