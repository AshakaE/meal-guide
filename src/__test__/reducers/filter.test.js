import filterReducer from '../../reducers/filter';
import FILTER from '../../actions/index';

const state = {
  options: {
    findMeal: '',
    dishCategory: '',
    mealCategory: '',
    cuisineCategory: '',
  },
};

describe('filterReducer', () => {
  it('returns a filtered query', () => {
    const action = {
      type: FILTER,
    };
    const newState = filterReducer(state, action);
    expect(newState.options).toEqual({
      findMeal: '',
      mealCategory: '',
      dishCategory: '',
      cuisineCategory: '',
    });
  });

  it('Does not mutate the original state', () => {
    const action = {
      type: FILTER,
    };
    const newState = filterReducer(state, action);
    expect(newState.options).not.toEqual({
      findMeal: 'bread',
      mealCategory: 'breakfast',
      dishCategory: 'alcohol-cocktail',
      cuisineCategory: 'american',
    });
  });
});
