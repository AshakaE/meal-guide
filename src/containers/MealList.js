import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MealCard from '../components/MealCard';
import { getMeals } from '../actions/index';
import Loading from '../components/Loading';
import vals from '../assets/values';
import styles from '../assets/css/results.module.css';

const MealList = (props) => {
  const {
    getMeals, loading, meals, options,
  } = props;

  const cas = vals(meals);

  useEffect(() => {
    const {
      findMeal,
      mealCategory,
      dishCategory,
      cuisineCategory,
    } = options;
    getMeals(findMeal, mealCategory, dishCategory, cuisineCategory);
  }, [options]);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <div className={styles.listGrid}>
          {Object.values(cas).map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({
  mealState: { meals, loading },
  filterState: { options },
}) => ({ loading, meals, options });

MealList.propTypes = {
  loading: PropTypes.bool.isRequired,
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMeals: PropTypes.func.isRequired,
  options: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default connect(mapStateToProps, { getMeals })(MealList);
