const SHOW_MEAL = 'SHOW_MEAL';

const defaultState = {
  meals: {
    meal1: {
      id: 1,
      title: 'rice',
      mealType: 'Lunch',
      ingredients: 'rice, water, salt',
      image:
        'https://media.istockphoto.com/photos/cooked-rice-picture-id491090528?k=6&m=491090528&s=612x612&w=0&h=bkDHZ4AtcCmGi1lkpyOd7zDpHubBW40dSaruF4dWPTY=',
    },
  },
  filter: 'All',
};

const mealReducer = (state = defaultState, action) => {
  switch (action.type) {
    case SHOW_MEAL:
      return { ...state };
    default:
      return state;
  }
};

export default mealReducer;
