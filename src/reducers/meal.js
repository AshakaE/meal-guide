import { SET_LOADING, GET_MEALS } from '../actions/index';

const defaultState = {
  loading: false,
  meals: [],
};

const mealReducer = (state = defaultState, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === GET_MEALS) {
    return { ...state, loading: false, meals: action.payload };
  }
  return state;
};

export default mealReducer;
