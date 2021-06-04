import React from 'react';
import renderer from 'react-test-renderer';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import mealReducer from '../../reducers/meal';
import recipeReducer from '../../reducers/recipe';
import filterReducer from '../../reducers/filter';
import MealForm from '../../containers/MealForm';

const middleware = [thunk];
const store = createStore(
  combineReducers({
    mealState: mealReducer,
    recipeState: recipeReducer,
    filterState: filterReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware)),
);

describe('MealForm', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <MealForm
          store={store}
          filters={{
            q: '',
            cuisineType: '',
            dishType: '',
            mealType: '',
          }}
          handleSubmit={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
