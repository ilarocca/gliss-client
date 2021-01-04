import { Component } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import RecipeApiService from '../../Services/recipe-api-service';
import { AiOutlineStar } from 'react-icons/ai';
import { AiFillStar } from 'react-icons/ai';
import './FavRecipe.css';

export default class FavRecipe extends Component {
  static contextType = AuthContext;
  state = {
    user: this.context.currentUser,
    recipeName: this.props.recipe.recipeName,
    ingredients: this.props.recipe.ingredients.split('#%'),
    id: this.props.recipe.id,
    url: this.props.recipe.url,
    img: this.props.recipe.img,
    error: '',
  };

  handleClick = async (e) => {
    e.preventDefault();
    this.setState((prevState) => ({
      error: null,
    }));
    try {
      const userId = this.state.user.id;
      const recipeId = this.state.id;
      await RecipeApiService.deleteRecipe(userId, recipeId);
      this.props.deleteRecipe(recipeId);
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  render() {
    return (
      <div className="recipe-box">
        <div className="recipe-info">
          <h3 className="recipe-heading">
            <button type="submit" className="favorite" onClick={this.handleClick}>
              <AiFillStar size={25} style={{ color: 'gold' }} />
            </button>{' '}
            <a href={this.state.url} target="_blank" rel="noreferrer" className="recipe-name">
              {this.state.recipeName}
            </a>
          </h3>
          <div className="ingredients-header">Ingredients:</div>
          <ul>
            {this.state.ingredients.map((ingredient) => (
              <li className="recipe-ingredient">{ingredient}</li>
            ))}
          </ul>
        </div>

        <img src={this.state.img} alt={this.state.recipeName} className="recipe-image" />
      </div>
    );
  }
}
