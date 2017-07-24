const platformsAllReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_PLATFORMS':
      return action.payload;
  };
  return state;
};

module.exports = platformsAllReducer;
