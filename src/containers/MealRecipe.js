import React from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getRecipe } from '../actions/index';
import Loading from '../components/Loading';
import RecipeCard from '../components/RecipeCard';
import vals from '../assets/values';

const MealRecipe = (props) => {
  const { getRecipe, loading, recipe } = props;
  const { id } = useParams();
  const cas = vals(recipe);

  React.useEffect(() => {
    getRecipe(`${id}`);
  }, [getRecipe]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      {Object.values(cas).map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

const mapStateToProps = ({ recipeState: { recipe, loading } }) => ({
  loading,
  recipe,
});

MealRecipe.propTypes = {
  loading: PropTypes.bool.isRequired,
  recipe: PropTypes.arrayOf(PropTypes.object).isRequired,
  getRecipe: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { getRecipe })(MealRecipe);
