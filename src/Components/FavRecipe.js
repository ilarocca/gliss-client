import { Component } from 'react';
import { AiFillHeart } from 'react-icons/ai';
import AuthContext from '../Contexts/AuthContext';
import RecipeApiService from '../Services/recipe-api-service';

export default class FavRecipe extends Component {
  static contextType = AuthContext;
  state = {
    user: this.context.currentUser,
    recipeName: this.props.recipe.recipeName,
    id: this.props.recipe.id,
    url: this.props.recipe.url,
    img: this.props.recipe.image,
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
      <div>
        <h3>
          <a href={this.props.recipe.url} target="_blank" rel="noreferrer">
            {this.props.recipe.recipeName}
          </a>{' '}
          <button type="submit" onClick={this.handleClick}>
            <AiFillHeart />
          </button>
        </h3>
        <img src={this.props.recipe.img} alt={this.props.recipe.recipeName} />
      </div>
    );
  }
}
