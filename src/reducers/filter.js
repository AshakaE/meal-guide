const CHANGE_CATEGORY = 'CHANGE_CAEGORY';

const filterReducer = (state = 'All', action) => {
  switch (action.type) {
    case CHANGE_CATEGORY: {
      return action.payload;
    }
    default:
      return state;
  }
};

export default filterReducer;
