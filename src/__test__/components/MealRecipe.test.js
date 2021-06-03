import React from 'react';
import renderer from 'react-test-renderer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import ReactRouter from 'react-router';
import mealReducer from '../../reducers/meal';
import recipeReducer from '../../reducers/recipe';
import filterReducer from '../../reducers/filter';
import MealRecipe from '../../components/MealRecipe';

const middleware = [thunk];
const store = createStore(
  combineReducers({
    mealState: mealReducer,
    recipeState: recipeReducer,
    filterState: filterReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware)),
);

describe('MealRecipe', () => {
  it('renders correctly', () => {
    jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ id: '1234' });
    const tree = renderer
      .create(
        <MealRecipe
          store={store}
          id="1234"
          title="Test meal"
          image="url"
          cuisine="cuisine"
          dish={['dish']}
          meal={['meal']}
          key="1"
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
