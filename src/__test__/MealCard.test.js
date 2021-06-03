import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import MealCard from '../components/MealCard';

// jest.mock('react-router-dom', () => ({
//   ...jest.requireActual('react-router-dom'),
//   useLocation: () => ({
//     pathname: 'example.com/test',
//   }),
// }));

describe('MealCard', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <BrowserRouter>
          <MealCard
            id="1"
            title="meal"
            image="url"
            cuisine={['italian']}
            dish={['dish']}
            meal={['meal']}
            key="1"
          />
        </BrowserRouter>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
