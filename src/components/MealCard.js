import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const MealCard = (props) => {
  const {
    meal: {
      id, title, mealType, image,
    },
  } = props;

  console.log(id);
  return (
    <div>
      <div>
        <img src={image} alt={title} />
      </div>
      <div>
        <p>{title}</p>
        <p>{mealType}</p>
      </div>
      <Link to={`/recipe/${id}`}>View recipe</Link>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    mealType: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default MealCard;
