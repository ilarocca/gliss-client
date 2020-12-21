import { Component } from 'react';
import AuthContext from '../Contexts/AuthContext';
import ItemApiService from '../Services/item-api-service';
import AddItem from './AddItem';
import GetRecipes from './GetRecipes';
import Recipe from './Recipe';

export class UserHomePage extends Component {
  static contextType = AuthContext;
  state = {
    user: this.context.currentUser,
    items: [],
    error: '',
  };

  async componentDidMount() {
    const userItems = await ItemApiService.items(this.state.user.id);
    this.setState({
      items: userItems,
    });
  }

  addItem = () => {
    this.componentDidMount();
  };

  render() {
    return (
      <div>
        <header role="banner">
          <h2>Welcome, {this.state.user.firstName}.</h2>
        </header>
        {this.state.items.length < 3 ? (
          <div>
            <h3>Add your first 3 items into your pantry.</h3>
            <AddItem addItem={this.addItem} />
          </div>
        ) : (
          <GetRecipes setRecipes={this.props.setRecipes} />
        )}
        <div>{this.state.error}</div>
        <ul>
          {this.props.recipes === null
            ? null
            : this.props.recipes.map((recipe) => (
                <li>
                  <Recipe recipe={recipe} />
                </li>
              ))}
        </ul>
      </div>
    );
  }
}

export default UserHomePage;
