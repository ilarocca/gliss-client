import { React, Component } from 'react';
import GetRecipes from './GetRecipes';
import AddItem from './AddItem';
import AuthContext from '../Contexts/AuthContext';
import ItemApiService from '../Services/item-api-service';
import Item from './Item';

export default class MyPantry extends Component {
  static contextType = AuthContext;
  state = {
    user: this.context.currentUser,
    items: [],
    userQuery: '',
    sortBy: 'Date',
  };

  async componentDidMount() {
    const userItems = await ItemApiService.items(this.state.user.id);
    this.setState({
      items: userItems,
    });
  }

  deleteItem = (id) => {
    this.setState((prevState) => {
      const newItems = prevState.items.filter((item) => item.id !== id);
      return {
        items: newItems,
      };
    });
  };
  addItem = () => {
    this.componentDidMount();
  };
  addToQuery = (queryItem) => {
    this.setState((prevState) => ({
      userQuery: prevState.userQuery + queryItem,
    }));
  };

  setQuery = () => {
    this.setState({
      userQuery: '',
    });
  };

  handleChange = (e) => {
    this.setState({
      sortBy: e.target.value,
    });
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
    return (
      <main role="main">
        <header role="banner">
          <h2>{this.state.user.firstName}'s Pantry</h2>
        </header>
        <GetRecipes
          setRecipes={this.props.setRecipes}
          // setIngredients={this.props.setIngredients}
          // ingredients={this.props.ingredients}
          userQuery={this.state.userQuery}
          setQuery={this.setQuery}
        />
        <AddItem addItem={this.addItem} />
        <div>
          <div onChange={this.handleChange}>
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
          </div>

          <ul>
            {this.state.items.map((item) => (
              <li key={item.id}>
                <Item item={item} deleteItem={this.deleteItem} addToQuery={this.addToQuery} />
              </li>
            ))}
          </ul>
        </div>
      </main>
    );
  }
}
