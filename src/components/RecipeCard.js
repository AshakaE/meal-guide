import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const RecipeCard = (props) => {
  const {
    recipe: {
      label, mealType, ingredients, image, url,
    },
  } = props;

  return (
    <>
      <div>
        <img src={image} alt={label} />
      </div>
      <div>
        <p>
          {mealType}
        </p>
        <div>
          Ingredients
          {ingredients.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </div>
      <a href={url} target="_blank" rel="noopener noreferrer">
        View meal procedures
      </a>
      <Link to="/">Go to Search</Link>
    </>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    label: PropTypes.string.isRequired,
    mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
