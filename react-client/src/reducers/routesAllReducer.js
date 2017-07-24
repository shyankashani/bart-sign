const routesAllReducer = (state = {}, action) => {
  switch(action.type) {
    case 'FETCH_ROUTES':
      return action.payload;
  };
  return state;
};

module.exports = routesAllReducer;
