const id = process.env.REACT_APP_MEAL_ID;
const key = process.env.REACT_APP_MEAL_KEY;

const url = (one, two, three, four) => `https://api.edamam.com/search?q=${one}&app_id=${id}&app_key=${key}&mealType=${two}&DishType=${three}&cuisineType=${four}&from=0&to=60`;

const urlRecipe = (one) => (`https://api.edamam.com/search?q=${one}&app_id=6013ef39&app_key=0025b83989b821c40f9ab2605c6530d5&from=0&to=1`);

export { url, urlRecipe };
