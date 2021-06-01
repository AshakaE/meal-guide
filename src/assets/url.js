const url = (one, two, three, four) => (
  `https://api.edamam.com/search?q=${one}&app_id=6013ef39&app_key=0025b83989b821c40f9ab2605c6530d5${two}${three}${four}`
);

// const urlRecipe = () => 'https://api.edamam.com/search?q=19708496a4d514fe47a3b75a6a76ef27&app_id=6013ef39&app_key=0025b83989b821c40f9ab2605c6530d5&from=0&to=1';
const urlRecipe = (one) => (`https://api.edamam.com/search?q=${one}&app_id=6013ef39&app_key=0025b83989b821c40f9ab2605c6530d5&from=0&to=1`);

export { url, urlRecipe };
