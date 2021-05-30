import React from 'react';
import { Link } from 'react-router-dom';

const MealCard = () => (
  <div>
    <div>
      <img src="" alt="" />
    </div>
    <div>
      <p>Name</p>
      <p>Mealtype</p>
    </div>
    <Link to="/recipe">View recipe</Link>
  </div>
);

export default MealCard;
