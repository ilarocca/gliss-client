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
    mounted: false,
  };

  async componentDidMount() {
    const userItems = await ItemApiService.items(this.state.user.id);
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
      mounted: true,
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
    // fetch user items before render
    if (this.state.mounted === false) {
      return <div />;
    }
    return (
      <main role="main" className="pantry">
        <header className="pantry-header">
          <h2 className="user-first-name">{this.state.user.firstName}'s Pantry</h2>
        </header>
        <AddItem addItem={this.addItem} />
        {this.state.items.length < 3 ? (
          <div className="pantry-instructions">
            Enter an item name and select it's category from the drop down menu.
          </div>
        ) : null}
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
