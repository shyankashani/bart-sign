const routesReducer = (state = {}, action) => {
  switch(action.type) {
    case 'GET_ROUTES':
      return action.payload;
  };
  return state;
};

module.exports = routesReducer;
