const stationsReducer = (state = [], action) => {
  switch(action.type) {
    case 'FETCH_STATIONS':
      return action.payload;
  };
  return state;
};

module.exports = stationsReducer;
