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
      <p>{label}</p>
      <div>
        <img src={image} alt={label} />
      </div>
      <div>
        <p>{mealType}</p>
      </div>
      <Link to={`/recipe/${id}`}>View recipe</Link>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default MealCard;
