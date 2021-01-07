import { Link } from 'react-router-dom';
import { Component } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import './MyAccount.css';

export default class MyAccount extends Component {
  static contextType = AuthContext;

  handleSignOut = () => {
    this.context.logout();
  };
  render() {
    return (
      <div className="my-account">
        <div>
          <h2 className="signout-header">... no seriously, where's my plate?</h2>
          <Link to="/">
            <button className="signout-button" onClick={this.handleSignOut}>
              Sign Out
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
