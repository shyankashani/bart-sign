const stationsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_STATIONS':
      return action.payload;
  };
  return state;
};

module.exports = stationsReducer;
