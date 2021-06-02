import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from '../assets/css/results.module.css';

const MealCard = (props) => {
  const {
    meal: {
      id, label, mealType, dishType, cuisineType, image,
    },
  } = props;

  return (
    <div className={styles.card}>
      <div>
        <img src={image} alt={label ?? 'image'} className={styles.image} />
      </div>
      <div className={styles.cardInfo}>
        <div className={styles.mealInfo}>
          <div className={styles.label}>
            <p>Title</p>
          </div>
          <div className={styles.mealDetails}>
            <p>{label}</p>
          </div>
        </div>
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
              <p>{mealType}</p>
            </div>
            <div className={styles.labelInfo}>
              <p>{dishType}</p>
            </div>
            <div className={styles.labelInfo}>
              <p>{cuisineType}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Link to={`/recipe/${id}`}>View recipe</Link>
      </div>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    mealType: PropTypes.arrayOf(PropTypes.string).isRequired,
    dishType: PropTypes.arrayOf(PropTypes.string).isRequired,
    cuisineType: PropTypes.arrayOf(PropTypes.string).isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default MealCard;
