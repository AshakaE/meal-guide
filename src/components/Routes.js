/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-lone-blocks */

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './App';
import MealRecipe from './MealRecipe';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/recipe" component={MealRecipe} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
