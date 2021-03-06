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
      </div>
      <div className={styles.btn}>
        <Link to={`/recipe/${id}`}>View recipe</Link>
      </div>
    </div>
  );
};

MealCard.propTypes = {
  meal: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    mealType: PropTypes.arrayOf(PropTypes.string),
    dishType: PropTypes.arrayOf(PropTypes.string),
    cuisineType: PropTypes.arrayOf(PropTypes.string),
    image: PropTypes.string,
  }).isRequired,
};

export default MealCard;
