import React from 'react';
import PropTypes from 'prop-types';

const RecipeCard = (props) => {
  const {
    recipe: {
      id, label, mealType, ingredients, image,
    },
  } = props;

  return (

    <>
      <div>
        <img src={image} alt={label} />
      </div>
      <div>
        <p>
          Ingredients
          { id }
          { mealType }
        </p>
        <div>
          {ingredients.map((item) => (<p key={item}>{item}</p>))}
        </div>
      </div>
    </>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
