/* eslint-disable react/no-children-prop */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MealRecipe from './MealRecipe';
import MealList from './MealList';
import MealForm from './MealForm';

const App = () => (
  <>
    <MealForm />
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MealList />
        </Route>
        <Route path="/recipe/:id" children={<MealRecipe />} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
