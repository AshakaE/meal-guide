/* eslint-disable no-sequences */
import url from '../assets/url';

export const GET_MEALS = 'GET_MEALS';
export const SET_LOADING = 'SET_LOADING';
export const setLoading = () => ({ type: SET_LOADING });
export const changeCategory = (filter) => ({
  type: 'CHANGE_CATEGORY',
  payload: filter,
});

export const getMeals = (d1, d2, d3, d4) => async function fn(dispatch) {
  dispatch(setLoading());
  const response = await fetch(url(d1, d2, d3, d4));
  const data = await response.json();
  const values = data.hits;
  // const values = [];
  // for (let i = 0; i < response.hits.length; i += 1) {
  //   const {
  //     label, image, ingredients, cuisineType, dishType, mealType, url,
  //   } = data.hits[i].recipe;
  //   const id = response.hits[i].recipe.uri.split('_')[1];
  //   const cuisine = cuisineType ? cuisineType[0] : '';
  //   values.push({
  //     id,
  //     title: label,
  //     image,
  //     ingredients,
  //     cuisine,
  //     dishType,
  //     mealType,
  //     url,
  //   });
  // }
  // return values,
  dispatch({ type: GET_MEALS, payload: values });
};
