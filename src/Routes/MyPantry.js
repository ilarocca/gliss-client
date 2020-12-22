import { React, Component } from 'react';
import GetRecipes from '../Components/GetRecipes';
import AddItem from '../Components/AddItem';
import AuthContext from '../Contexts/AuthContext';
import ItemApiService from '../Services/item-api-service';
import Item from '../Components/Item';
import CategoryCard from '../Components/CategoryCard';

export default class MyPantry extends Component {
  static contextType = AuthContext;
  state = {
    user: this.context.currentUser,
    items: [],
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
    console.log(categoryCards);
    this.setState({
      categoryCards: categoryCards,
    });
  }

  deleteItem = (id) => {
    // updates to check category.length
    this.componentDidMount();
  };

  addItem = () => {
    this.componentDidMount();
  };

  render() {
    return (
      <main role="main">
        <header role="banner">
          <h2>{this.state.user.firstName}'s Pantry</h2>
        </header>
        <AddItem addItem={this.addItem} />
        <div>
          <ul>
            {this.state.categoryCards.map((category) =>
              category.length === 0 ? null : (
                <li>
                  <CategoryCard category={category} deleteItem={this.deleteItem} />
                </li>
              )
            )}
          </ul>
        </div>
      </main>
    );
  }
}
