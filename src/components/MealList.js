/* eslint-disable no-undef */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import MealCard from './MealCard';
import { getMeals, getOptions } from '../actions/index';
import Loading from './Loading';
import vals from '../assets/values';

const MealList = (props) => {
  const {
    getMeals, loading, meals, options,
  } = props;
  // const options = getOptions();
  console.log(options);

  const cas = vals(meals);

  React.useEffect(() => {
    getMeals('fish', '&mealType=breakfast', '', '');
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

const mapStateToProps = ({
  mealState: { meals, loading },
  filterState: { options },
}) => ({ loading, meals, options });

MealList.propTypes = {
  loading: PropTypes.bool.isRequired,
  meals: PropTypes.arrayOf(PropTypes.object).isRequired,
  getMeals: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(mapStateToProps, { getMeals, getOptions })(MealList);
