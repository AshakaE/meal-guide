import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { mealType, dishType, cuisineType } from '../assets/options';
import { getOptions } from '../actions/index';
import styles from '../assets/css/search.module.css';

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
    if (filter.findMeal === '') {
      filter.findMeal = 'bread';
    }
    getOptions(filter);
  };

  return (
    <div className={styles.house}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>The Meal Guide</h1>
        </div>
        <div className={styles.form}>
          <div className={styles.search}>
            <input
              type="text"
              name="findMeal"
              onChange={handleChange}
              className={styles.searchBox}
              placeholder="Search meal"
            />
          </div>
          <div className={styles.input}>
            <select
              name="mealCategory"
              id="mealCategory"
              onChange={handleChange}
              className={styles.singleInput}
            >
              {mealType.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
            <select
              name="dishCategory"
              id="dishCategory"
              onChange={handleChange}
              className={styles.singleInput}
            >
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
              className={styles.singleInput}
            >
              {cuisineType.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
          <button type="submit" id="btn" onClick={handleSubmit} className={styles.btn}>
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ filterState: { options } }) => ({
  options,
});

MealForm.propTypes = {
  getOptions: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getOptions })(MealForm);
