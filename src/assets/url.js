const url = (one, two, three, four) => {
  if (one || two || three || four === '') {
    return `https://api.edamam.com/search?q=${''}&app_id=6013ef39&app_key=0025b83989b821c40f9ab2605c6530d5&${'mealType=breakfast'}${''}${''}`;
  }
  return `https://api.edamam.com/search?q=${one}&app_id=6013ef39&app_key=0025b83989b821c40f9ab2605c6530d5${two}${three}${four}`;
};

export default url;
