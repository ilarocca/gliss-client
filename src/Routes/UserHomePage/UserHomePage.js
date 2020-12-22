import { Component } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import ItemApiService from '../../Services/item-api-service';
import MyPantry from '../MyPantry/MyPantry';

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
        <header role="banner"></header>
        <div>{this.state.error}</div>
        <MyPantry />
        {/* <ul>
          {this.props.recipes === null
            ? null
            : this.props.recipes.map((recipe) => (
                <li>
                  <Recipe recipe={recipe} />
                </li>
              ))}
        </ul> */}
      </div>
    );
  }
}

export default UserHomePage;
