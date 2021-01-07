import { React, Component } from 'react';
import AddItem from '../../Components/AddItem/AddItem';
import AuthContext from '../../Contexts/AuthContext';
import ItemApiService from '../../Services/item-api-service';
import CategoryCard from '../../Components/CategoryCard/CategoryCard';
import './MyPantry.css';

export default class MyPantry extends Component {
  static contextType = AuthContext;
  state = {
    user: this.context.currentUser,
    items: [],
    categoryCards: [],
  };

  async componentDidMount() {
    const userItems = await ItemApiService.items(this.state.user.id);
    this.setState({});
    const categories = {
      Grain: 1,
      Meat: 2,
      Fish: 3,
      Vegetable: 4,
      Fruit: 5,
      Seasoning: 6,
      Sauce: 7,
      Baking: 8,
      Sweets: 9,
      Misc: 10,
    };

    const categoryCards = [];
    //sort items into correct categories
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
    });
  }

  deleteItem = () => {
    // updates to check category.length, rerenders items
    this.componentDidMount();
  };

  addItem = () => {
    this.componentDidMount();
  };

  render() {
    return (
      <main role="main" className="pantry">
        <header className="pantry-header">
          <h2 className="user-first-name">{this.state.user.firstName}'s Pantry</h2>
        </header>
        <AddItem addItem={this.addItem} />
        <div>
          <ul className="category-card">
            {this.state.categoryCards.map((category) =>
              category.length === 0 ? null : (
                <li key={category[0].categoryId}>
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
