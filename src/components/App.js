import React from 'react';
import MealCard from './MealCard';
import MealRecipe from './MealRecipe';
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
    <MealCard />
    <MealRecipe />
  </div>
);

export default App;
