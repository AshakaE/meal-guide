/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MealCard from './MealCard';
import { getMeals } from '../actions/index';
import Loading from './Loading';

const MealList = (props) => {
  const { getMeals, loading, meals } = props;
  const values = [];
  for (let i = 0; i < meals.length; i += 1) {
    const {
      label, image, ingredients, cuisineType, dishType, mealType, url,
    } = meals[i].recipe;
    const id = meals[i].recipe.uri.split('_')[1];
    values.push({
      id,
      label,
      image,
      ingredients,
      cuisineType,
      dishType,
      mealType,
      url,
    });
  }

  React.useEffect(() => {
    getMeals('rice', '&mealType=breakfast', '', '');
  }, [getMeals]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div>
        <div>
          {Object.values(values).map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ mealState: { meals, loading } }) => ({ loading, meals });

MealList.propTypes = {
  loading: PropTypes.bool.isRequired,
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMeals: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getMeals })(MealList);
