import React from 'react';
import renderer from 'react-test-renderer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mealReducer from '../reducers/meal';
import recipeReducer from '../reducers/recipe';
import filterReducer from '../reducers/filter';
import MealList from '../components/MealList';

const middleware = [thunk];
const store = createStore(
  combineReducers({
    mealState: mealReducer,
    recipeState: recipeReducer,
    filterState: filterReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware)),
);

describe('MealList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MealList
          store={store}
          id="1"
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
