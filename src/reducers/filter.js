import { FILTER } from '../actions/index';

const defaultState = {
  options: {
    findMeal: '',
    dishCatergory: '',
    mealCategory: '',
    cuisineCategory: '',
  },
};

const filterReducer = (state = defaultState, action) => {
  if (action.type === FILTER) {
    console.log('hello');
    return action.payload;
  }
  return state;
};

export default filterReducer;
