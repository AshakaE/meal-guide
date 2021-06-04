import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MealCard from '../../components/MealCard';

describe('MealCard', () => {
  it('renders correctly', () => {
    const label = 'meal';
    const mealType = ['lunch'];
    const dishType = ['egg'];
    const cuisineType = ['test'];
    const image = 'url';
    const id = 'blank';
    const tree = renderer
      .create(
        <BrowserRouter>
          <MealCard
            meal={{
              id,
              label,
              mealType,
              dishType,
              cuisineType,
              image,
            }}
          />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
