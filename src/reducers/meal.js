import { SET_LOADING, GET_MEALS } from '../actions/index';

const defaultState = {
  // meals: {
  //   meal1: {
  //     id: 1,
  //     title: 'rice',
  //     mealType: 'Lunch',
  //     ingredients: 'rice, water, salt',
  //     image:
  //       'https://media.istockphoto.com/photos/cooked-rice-picture-id491090528?k=6&m=491090528&s=612x612&w=0&h=bkDHZ4AtcCmGi1lkpyOd7zDpHubBW40dSaruF4dWPTY=',
  //   },
  // },
  // filter: 'All',
  loading: false,
  meals: [],
};

const mealReducer = (state = defaultState, action) => {
  if (action.type === SET_LOADING) {
    return { ...state, loading: true };
  }
  if (action.type === GET_MEALS) {
    return { ...state, loading: false, meals: action.payload };
  }
  return state;
};

export default mealReducer;
