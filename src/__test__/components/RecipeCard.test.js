import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RecipeCard from '../../components/RecipeCard';

describe('RecipeCard', () => {
  it('renders correctly', () => {
    const ingredients = ['1', '2', '3'];
    const label = 'meal';
    const mealType = ['lunch'];
    const dishType = 'egg';
    const cuisineType = 'test';
    const image = 'url';
    const url = 'blank';
    const tree = renderer
      .create(
        <BrowserRouter>
          <RecipeCard
            recipe={{
              label, mealType, dishType, cuisineType, image, url, ingredients,
            }}
          />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
