const stationReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SET_STATION':
      return action.payload;
  };
  return state;
};

module.exports = stationReducer;
