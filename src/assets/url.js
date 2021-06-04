// const id = process.env.MEAL_ID;
// const key = process.env.MEAL_KEY;

// const url = (one, two, three, four) => `https://api.edamam.com/search?q=${one}&app_id=${id}&app_key=${key}&${two}&${three}&${four}&from=0&to=60`;
const url = (one, two, three, four) => `https://api.edamam.com/search?q=${one}&app_id=6013ef39&app_key=0025b83989b821c40f9ab2605c6530d5&${two}&${three}&${four}&from=0&to=60`;

const urlRecipe = (one) => (`https://api.edamam.com/search?q=${one}&app_id=6013ef39&app_key=0025b83989b821c40f9ab2605c6530d5&from=0&to=1`);

export { url, urlRecipe };
// MEAL_ID=6013ef39
// MEAL_KEY=0025b83989b821c40f9ab2605c6530d5
