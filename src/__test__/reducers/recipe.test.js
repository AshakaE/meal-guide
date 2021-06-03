import recipeReducer from '../../reducers/recipe';
import { GET_RECIPE, SET_LOADING } from '../../actions/index';

const state = {};

describe('mealReducer', () => {
  it('returns state with a boolean and an array', () => {
    const newState = { loading: true, meals: [] };
    recipeReducer({ ...newState }, SET_LOADING);
    expect(state).toEqual({});
  });

  it('Does not mutate the original state', () => {
    const newState = { loading: true, meals: [] };
    recipeReducer({ ...newState }, GET_RECIPE);
    expect(state).not.toEqual({
      loading: true,
      meals: [],
    });
  });
});
