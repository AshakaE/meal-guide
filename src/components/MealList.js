import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MealCard from './MealCard';

const MealList = (props) => {
  const { meals } = props;
  return (
    <div>
      <div>
        <div>
          {/* {meals.map((meal) => {
            if (filter !== 'All') {
              if (filter === meal.mealType) {
                return <MealCard key={meal.id} meal={meal} />;
              }
            } else {
              return <MealCard key={meal.id} meal={meal} />;
            }
            return null;
          })} */}
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  meals: state.meals,
  filter: state.filter,
});

MealList.propTypes = {
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  // filter: PropTypes.string.isRequired,
};

export default connect(mapStateToProps)(MealList);
