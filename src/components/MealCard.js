import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MealCard = (props) => {
  const {
    meal: {
      id, label, mealType, image,
    },
  } = props;

  return (
    <div>
      <p>{id}</p>
      <div>
        <img src={image} alt={label} />
      </div>
      <div>
        <p>{label}</p>
        <p>{mealType}</p>
      </div>
      <Link to={`/recipe/${id}`}>View recipe</Link>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    mealType: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default MealCard;
