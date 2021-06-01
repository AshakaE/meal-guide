const vals = (data) => {
  const values = [];
  for (let i = 0; i < data.length; i += 1) {
    const {
      label, image, ingredients, cuisineType, dishType, mealType, url,
    } = data[i].recipe;
    const id = data[i].recipe.uri.split('_')[1];
    values.push({
      id,
      label,
      image,
      ingredients,
      cuisineType,
      dishType,
      mealType,
      url,
    });
  }
  return values;
};

export default vals;
