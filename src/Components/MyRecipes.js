import { Component } from 'react';
import RecipeApiService from '../Services/recipe-api-service';
import AuthContext from '../Contexts/AuthContext';
import FavRecipe from './FavRecipe';

class MyRecipes extends Component {
  static contextType = AuthContext;

  state = {
    user: this.context.currentUser,
    recipes: [],
    error: '',
  };

  async componentDidMount() {
    const userRecipes = await RecipeApiService.recipes(this.state.user.id);
    this.setState({
      recipes: userRecipes,
    });
  }

  deleteRecipe = async (id) => {
    //cause rerender to reflect deleted recipe
    this.setState((prevState) => {
      const newRecipes = prevState.recipes.filter((recipe) => recipe.id !== id);
      return {
        recipes: newRecipes,
      };
    });
  };

  render() {
    // sort recipes by date added
    const { recipes } = this.state;
    const newItems = recipes.sort((a, b) => (a.dateCreated < b.dateCreated ? 1 : -1));
    return (
      <div>
        <div>
          <h2>{this.state.user.firstName}'s Recipes</h2>
        </div>

        <ul>
          {this.state.recipes === undefined
            ? null
            : this.state.recipes.map((recipe) => (
                <li key={recipe}>
                  <FavRecipe recipe={recipe} deleteRecipe={this.deleteRecipe} />
                </li>
              ))}
        </ul>
      </div>
    );
  }
}
export default MyRecipes;
