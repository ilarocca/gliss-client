import { React, Component } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import RecipeApiService from '../../Services/recipe-api-service';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';

export default class Recipe extends Component {
  static contextType = AuthContext;
  state = {
    user: this.context.currentUser,
    recipeName: this.props.recipe.recipe.label,
    id: null,
    url: this.props.recipe.recipe.url,
    img: this.props.recipe.recipe.image,
    favorite: false,
    error: '',
  };

  handleClick = async (e) => {
    e.preventDefault();
    await this.setState((prevState) => ({
      favorite: !prevState.favorite,
      error: null,
    }));
    const { recipeName, url, img } = this.state;
    const newRecipe = { recipeName, url, img };
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
      <div>
        <h3>
          <a href={this.state.url} target="_blank" rel="noreferrer">
            {this.state.recipeName}
          </a>{' '}
          <button type="submit" className="heart" onClick={this.handleClick}>
            {this.state.favorite === false ? <AiOutlineHeart /> : <AiFillHeart />}
          </button>
        </h3>
        <img src={this.state.img} alt={this.state.recipeName} />
      </div>
    );
  }
}
