const stationsAllReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_STATIONS':
      return action.payload;
  };
  return state;
};

module.exports = stationsAllReducer;
