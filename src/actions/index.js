/* eslint-disable no-sequences */
import { url, urlRecipe } from '../assets/url';

export const GET_MEALS = 'GET_MEALS';
export const GET_RECIPE = 'GET_RECIPE';
export const SET_LOADING = 'SET_LOADING';

export const setLoading = () => ({ type: SET_LOADING });

export const getMeals = (d1, d2, d3, d4) => async function fn(dispatch) {
  dispatch(setLoading());
  const response = await fetch(url(d1, d2, d3, d4));
  const data = await response.json();
  const values = data.hits;
  dispatch({ type: GET_MEALS, payload: values });
};

export const getRecipe = (d1) => async function fn(dispatch) {
  dispatch(setLoading());
  const response = await fetch(urlRecipe(d1));
  const data = await response.json();
  // console.log(data.hits);
  const values = data.hits;
  dispatch({ type: GET_RECIPE, payload: values });
};
