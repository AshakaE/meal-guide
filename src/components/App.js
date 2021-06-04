/* eslint-disable react/no-children-prop */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MealRecipe from '../containers/MealRecipe';
import MealList from '../containers/MealList';
import MealForm from '../containers/MealForm';

const App = () => (
  <>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MealForm />
          <MealList />
        </Route>
        <Route path="/recipe/:id" children={<MealRecipe />} />
      </Switch>
    </BrowserRouter>
  </>
);

export default App;
