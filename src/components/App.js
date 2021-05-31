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
        <Route exact path="/" component={MealList} />
        <Route path="/recipe" component={MealRecipe} />
      </Switch>
    </BrowserRouter>
    {/* <MealList /> */}
    {/* <MealRecipe /> */}
  </div>
);

export default App;
