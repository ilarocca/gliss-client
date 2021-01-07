import { Component } from 'react';
import MyPantry from '../MyPantry/MyPantry';

export class UserHomePage extends Component {
  state = {
    user: this.context.currentUser,
    items: [],
    error: '',
  };

  render() {
    return (
      <div>
        <header role="banner"></header>
        <div>{this.state.error}</div>
        <MyPantry />
      </div>
    );
  }
}

export default UserHomePage;
