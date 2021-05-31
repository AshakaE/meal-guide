import React from 'react';
import { useParams } from 'react-router-dom';

const MealRecipe = () => {
  const { id } = useParams();
  return (
    <div>
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <p>
          Ingredients
          { id }
        </p>
      </div>
    </div>
  );
};

export default MealRecipe;
