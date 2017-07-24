const stationsSelectedReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SELECT_STATION':
      return action.payload;
  };
  return state;
};

module.exports = stationsSelectedReducer;
