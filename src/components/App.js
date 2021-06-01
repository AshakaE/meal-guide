/* eslint-disable react/no-children-prop */
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MealRecipe from './MealRecipe';
import MealList from './MealList';
import { mealType, dishType, cuisineType } from '../assets/options';

const App = () => (
  <div>
    <div>
      <input type="text" />
      <select name="mealCategory" id="mealCategory">
        {mealType.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select name="dishCategory" id="dishCategory">
        {dishType.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
      <select name="cuisineCategory" id="cuisineCategory">
        {cuisineType.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MealList />
        </Route>
        <Route path="/recipe/:id" children={<MealRecipe />} />
      </Switch>
    </BrowserRouter>
  </div>
);

export default App;
