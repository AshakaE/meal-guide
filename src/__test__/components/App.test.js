/* eslint-disable react/no-children-prop */
import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import MealRecipe from '../../components/MealRecipe';
import MealList from '../../components/MealList';
import MealForm from '../../components/MealForm';
import mealReducer from '../../reducers/meal';
import recipeReducer from '../../reducers/recipe';
import filterReducer from '../../reducers/filter';

const middleware = [thunk];

const store = createStore(
  combineReducers({
    mealState: mealReducer,
    recipeState: recipeReducer,
    filterState: filterReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware)),
);

describe('App', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <>
          <BrowserRouter>
            <Switch>
              <Route exact path="/">
                <MealForm store={store} />
                <MealList store={store} />
              </Route>
              <Route path="/recipe/:id" children={<MealRecipe />} />
            </Switch>
          </BrowserRouter>
        </>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
