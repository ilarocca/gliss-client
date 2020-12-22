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
  };

  async componentDidMount() {
    const userItems = await ItemApiService.items(this.state.user.id);
    this.setState({
      items: userItems,
    });
    console.log(userItems);
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
      this.state.items.map((item) => {
        if (item.categoryId === value) {
          item.category = key;
          categoryItems.push(item);
        }
      });
      categoryCards.push(categoryItems);
    }
    this.setState({
      categoryCards: categoryCards,
    });
  }

  setRecipes = async (recipes) => {
    console.log(recipes);
    await this.setState({
      recipes: recipes,
    });
  };

  render() {
    console.log(this.state.recipes);
    return (
      <div>
        {this.state.categoryCards.length === 0 ? null : (
          // <h2>Add some items to your pantry to get started!</h2>
          <div>
            {/* <h2>Select items from your pantry</h2> */}
            <RecipesForm categoryCards={this.state.categoryCards} setRecipes={this.setRecipes} />
          </div>
        )}

        <ul>
          {this.state.recipes.map((recipe) =>
            recipe.length === 0 ? null : (
              <li>
                <Recipe recipe={recipe} />
              </li>
            )
          )}
        </ul>
      </div>
    );
  }
}
