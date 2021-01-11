import { Component } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import RecipesForm from '../../Components/RecipesForm/RecipesForm';
import ItemApiService from '../../Services/item-api-service';
import Recipe from '../../Components/Recipe/Recipe';
import './GetRecipe.css';

export default class GetRecipes extends Component {
  static contextType = AuthContext;

  state = {
    user: this.context.currentUser,
    recipes: [],
    categoryCards: [],
    error: '',
    mounted: false,
  };

  async componentDidMount() {
    const userItems = await ItemApiService.items(this.state.user.id);
    const categories = {
      Grain: 1,
      Meat: 2,
      Fish: 3,
      Vegatable: 4,
      Fruit: 5,
      Seasoning: 6,
      Sauce: 7,
      Baking: 8,
      Sweets: 9,
      Misc: 10,
    };

    const categoryCards = [];

    for (const [key, value] of Object.entries(categories)) {
      const categoryItems = [];
      userItems.forEach((item) => {
        if (item.categoryId === value) {
          item.category = key;
          categoryItems.push(item);
        }
      });
      categoryCards.push(categoryItems);
    }
    this.setState({
      items: userItems,
      categoryCards: categoryCards,
      mounted: true,
    });
  }

  setRecipes = async (recipes) => {
    await this.setState({
      recipes: recipes,
    });
  };

  render() {
    //fetch user items before render
    if (this.state.mounted === false) {
      return <div />;
    }
    return (
      <div className="get-recipes">
        {this.state.items.length < 3 ? <h2>Add a few more items to your pantry!</h2> : null}
        {this.state.categoryCards.length === 0 ? null : (
          <div>
            <div className="recipe-instructions">Select the items you'd like to get recipes for.</div>
            <RecipesForm categoryCards={this.state.categoryCards} setRecipes={this.setRecipes} />
          </div>
        )}
        <div>{this.state.error}</div>

        <ul className="recipes">
          {this.state.recipes.map((recipe) =>
            recipe.length === 0 ? null : (
              <li className="recipe" key={recipe.recipeName}>
                <Recipe recipe={recipe.recipe} />
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
}
