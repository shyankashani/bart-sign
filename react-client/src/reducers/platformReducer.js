const platformReducer = (state = '', action) => {
  switch(action.type) {
    case 'SET_PLATFORM':
      return action.payload;
  };
  return state;
};

module.exports = platformReducer;
