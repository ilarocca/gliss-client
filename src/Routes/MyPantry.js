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
    sortBy: 'Date',
  };

  async componentDidMount() {
    const userItems = await ItemApiService.items(this.state.user.id);
    this.setState({
      items: userItems,
    });

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
    console.log('delete');
    this.setState((prevState) => {
      const newItems = prevState.items.filter((item) => item.id !== id);
      return {
        items: newItems,
      };
    });
  };

  addItem = () => {
    console.log('add item');
    this.componentDidMount();
  };

  categoryCards = () => {
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
    // return categoryCards;
  };

  render() {
    const { sortBy, items } = this.state;
    //sort items, updated state, cause re-render
    if (sortBy === 'Alphebetical') {
      items.sort((a, b) => (a.item > b.item ? 1 : -1));
    } else if (sortBy === 'Category') {
      items.sort((a, b) => (a.categoryId > b.categoryId ? 1 : -1));
    } else {
      items.sort((a, b) => (a.dateCreated < b.dateCreated ? 1 : -1));
    }

    console.log(this.state.categoryCards);
    return (
      <main role="main">
        <header role="banner">
          <h2>{this.state.user.firstName}'s Pantry</h2>
        </header>
        <AddItem addItem={this.addItem} />
        <div>
          {/* <div onChange={this.handleChange}>
            <input
              type="radio"
              value="Date"
              name="top-panel-sort"
              onChange={this.handleChange}
              checked={this.state.sortBy === 'Date'}
            />
            Date Added
            <input
              type="radio"
              value="Category"
              name="top-panel-sort"
              onChange={this.handleChange}
              checked={this.state.sortBy === 'Category'}
            />
            Category
            <input
              type="radio"
              value="Alphebetical"
              name="top-panel-sort"
              onChange={this.handleChange}
              checked={this.state.sortBy === 'Alphebetical'}
            />
            Alphebetical
          </div> */}

          <ul>
            {this.state.categoryCards.map((category) =>
              category.length === 0 ? null : (
                <li>
                  <CategoryCard category={category} deleteItem={this.deleteItem} />
                </li>
              )
            )}
          </ul>

          {/* <ul>
            {this.state.items.map((item) => (
              <li key={item.id}>
                <Item item={item} deleteItem={this.deleteItem} addToQuery={this.addToQuery} />
              </li>
            ))}
          </ul> */}
        </div>
      </main>
    );
  }
}
