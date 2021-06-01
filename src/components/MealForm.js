import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mealType, dishType, cuisineType } from '../assets/options';
import { getOptions } from '../actions/index';

const MealForm = (props) => {
  const { getOptions } = props;
  const [state, setState] = React.useState({
    findMeal: '',
    mealCategory: '',
    dishCategory: '',
    cuisineCategory: '',
  });
  const handleChange = (e) => {
    const values = e.target.value;
    setState({
      ...state,
      [e.target.name]: values,
    });
    // console.log(state);
    getOptions(state);
    // console.log({ values });
  };
  const handleSubmit = () => {
    const filter = {
      ...state,
    };
    if (filter.mealCategory === '') {
      filter.mealCategory = 'breakfast';
    }
    if (filter.dishCategory === '') {
      filter.dishCategory = 'alcohol-cocktail';
    }
    if (filter.cuisineCategory === '') {
      filter.cuisineCategory = 'american';
    }
    // console.log(state);
    // getOptions(filter);
    return filter;
  };

  return (
    <div>
      <div>
        <input type="text" name="findMeal" onChange={handleChange} />
        <select name="mealCategory" id="mealCategory" onChange={handleChange}>
          {mealType.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select name="dishCategory" id="dishCategory" onChange={handleChange}>
          {dishType.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        <select
          name="cuisineCategory"
          id="cuisineCategory"
          onChange={handleChange}
        >
          {cuisineType.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
      <button type="submit" onClick={handleSubmit}>
        Search Meal
      </button>
    </div>
  );
};

const mapStateToProps = ({ filterState: { options } }) => ({
  options,
});

const mapDispatchToProps = (dispatch) => ({
  getOptions: (options) => dispatch(getOptions(options)),
});

MealForm.propTypes = {
  getOptions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealForm);
