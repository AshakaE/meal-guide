import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import RecipeCard from '../components/RecipeCard';

describe('RecipeCard', () => {
  it('renders correctly', () => {
    const ingredients = ['1', '2', '3'];
    const tree = renderer
      .create(
        <BrowserRouter>
          <RecipeCard
            recipe={{ ingredients }}
          />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
