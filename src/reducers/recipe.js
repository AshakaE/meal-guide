import { SET_LOADING, GET_RECIPE } from '../actions/index';

const defaultState = {
  loading: false,
  recipe: [],
};

const recipeReducer = (state = defaultState, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === GET_RECIPE) {
    return { ...state, loading: false, recipe: action.payload };
  }
  return state;
};

export default recipeReducer;
