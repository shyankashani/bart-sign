const platformsSelectedReducer = (state = {}, action) => {
  switch(action.type) {
    case 'SELECT_PLATFORM':
      return action.payload;
  };
  return state;
};

module.exports = platformsSelectedReducer;
