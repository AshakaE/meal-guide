import mealReducer from '../../reducers/meal';
import { GET_MEALS, SET_LOADING } from '../../actions/index';

const state = {};

describe('mealReducer', () => {
  it('returns state with a boolean and an array', () => {
    const newState = { loading: true, meals: [] };
    mealReducer({ ...newState }, SET_LOADING);
    expect(state).toEqual({});
  });

  it('Does not mutate the original state', () => {
    const newState = { loading: true, meals: [] };
    mealReducer({ ...newState }, GET_MEALS);
    expect(state).not.toEqual({
      loading: true,
      meals: [],
    });
  });
});
