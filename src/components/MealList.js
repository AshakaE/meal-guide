/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MealCard from './MealCard';
import { getMeals } from '../actions/index';
import Loading from './Loading';
import vals from '../assets/values';

const MealList = (props) => {
  const { getMeals, loading, meals } = props;
  const cas = vals(meals);

  React.useEffect(() => {
    getMeals('chicken', '&mealType=breakfast', '', '');
  }, [getMeals]);
  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div>
        <div>
          {Object.values(cas).map((meal) => (
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
