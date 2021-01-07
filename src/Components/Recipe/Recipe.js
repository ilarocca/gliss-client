import { React, Component } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import RecipeApiService from '../../Services/recipe-api-service';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import './Recipe.css';

export default class Recipe extends Component {
  static contextType = AuthContext;
  state = {
    user: this.context.currentUser,
    recipeName: this.props.recipe.label,
    url: this.props.recipe.url,
    img: this.props.recipe.image,
    recipeIngredients: this.props.recipe.ingredientLines || [],
    favorite: false,
    error: '',
  };

  handleClick = async (e) => {
    e.preventDefault();
    await this.setState((prevState) => ({
      favorite: !prevState.favorite,
      error: null,
    }));
    const { recipeName, url, img, recipeIngredients } = this.state;
    const ingredients = recipeIngredients.join('#%');
    const newRecipe = { recipeName, url, img, ingredients };
    const userId = this.state.user.id;
    newRecipe.userId = this.state.user.id;
    try {
      if (this.state.favorite === true) {
        const res = await RecipeApiService.addRecipe(newRecipe);
        this.setState({
          id: res.id,
        });
      } else {
        const recipeId = this.state.id;
        await RecipeApiService.deleteRecipe(userId, recipeId);
      }
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  render() {
    return (
      <div className="recipe-box">
        <div className="error-message">{this.state.error}</div>
        <a href={this.state.url} target="_blank" rel="noreferrer">
          <img src={this.state.img} alt={this.state.recipeName} className="recipe-image" />
        </a>
        <div className="recipe-info">
          <h3 className="recipe-heading">
            <a href={this.state.url} target="_blank" rel="noreferrer" className="recipe-name">
              {this.state.recipeName}
            </a>
          </h3>
          <button type="submit" className="favorite" onClick={this.handleClick}>
            {this.state.favorite === false ? (
              <>
                <div className="recipe-icon">
                  <AiOutlineStar size={25} style={{ color: 'gold' }} /> Add to My Recipes
                </div>
              </>
            ) : (
              <>
                <div className="recipe-icon">
                  <AiFillStar size={25} style={{ color: 'gold' }} /> Delete from My Recipes
                </div>
              </>
            )}
          </button>
          {this.state.recipeIngredients ? (
            <>
              <div className="ingredients-header">Ingredients:</div>
              <ul>
                {this.state.recipeIngredients.map((ingredient) => (
                  <li className="recipe-ingredient" key={ingredient}>
                    {ingredient}
                  </li>
                ))}
              </ul>
            </>
          ) : (
            <> </>
          )}
        </div>
      </div>
    );
  }
}
