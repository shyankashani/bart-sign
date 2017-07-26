const platformsReducer = (state = [], action) => {
  switch(action.type) {
    case 'GET_PLATFORMS':
      return action.payload;
  };
  return state;
};

module.exports = platformsReducer;
