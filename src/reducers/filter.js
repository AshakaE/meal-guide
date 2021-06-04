import { FILTER } from '../actions/index';

const defaultState = {
  options: {
    findMeal: '',
    dishCategory: '',
    mealCategory: '',
    cuisineCategory: '',
  },
};

const filterReducer = (state = defaultState, action) => {
  if (action.type === FILTER) {
    return { options: action.payload };
  }
  return state;
};

export default filterReducer;
