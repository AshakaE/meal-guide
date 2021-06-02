import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../assets/css/recipe.module.css';

const RecipeCard = (props) => {
  const {
    recipe: {
      label, mealType, dishType, cuisineType, ingredients, image, url,
    },
  } = props;

  return (
    <>
      <div className={styles.container}>
        <div className={styles.label}>
          <div className={styles.header}>
            <h1>
              {label}
              &nbsp;recipe
            </h1>
          </div>
        </div>
        <div className={styles.info}>
          <div>
            <div>
              <img src={image} alt={label} className={styles.image} />
            </div>
            <div className={styles.links}>
              <div className={styles.link}>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  View meal procedures
                </a>
              </div>
              <div className={styles.link}>
                <Link to="/">Go to Search</Link>
              </div>
            </div>
          </div>
          <div className={styles.recipeInfo}>
            <div className={styles.mealInfo}>
              <div className={styles.mealInfoOne}>
                <div className={styles.mealTitle}>
                  <p>Meal</p>
                </div>
                <div className={styles.mealTitle}>
                  <p>Dish</p>
                </div>
                <div className={styles.mealTitle}>
                  <p>Cuisine</p>
                </div>
              </div>
              <div className={styles.mealInfoTwo}>
                <div className={styles.labelInfo}>
                  <p>{mealType ?? 'nil'}</p>
                </div>
                <div className={styles.labelInfo}>
                  <p>{dishType ?? 'nil'}</p>
                </div>
                <div className={styles.labelInfo}>
                  <p>{cuisineType ?? 'nil'}</p>
                </div>
              </div>
            </div>
            <div className={styles.list}>
              <div className={styles.title}>
                <p>Ingredients</p>
              </div>
              {ingredients.map((item) => (
                <p key={item} className={styles.item}>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

RecipeCard.propTypes = {
  recipe: PropTypes.shape({
    label: PropTypes.string.isRequired,
    mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
    dishType: PropTypes.arrayOf(PropTypes.string).isRequired,
    cuisineType: PropTypes.arrayOf(PropTypes.string).isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
};

export default RecipeCard;
