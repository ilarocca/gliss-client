import { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Contexts/AuthContext';
import '../LandingNav/LandingNav.css';
import logo from '../../Images/logo.png';
import './MainNav.css';

// function backToHome() {
//   return <div>back home</div>;
// }

class MainNav extends Component {
  static contextType = AuthContext;

  state = {
    username: this.context.currentUser.username,
  };

  render() {
    const username = this.state.username;
    return (
      <div className="LandingNav">
        <header className="logo-header">
          {/* set App state recipes to empty, cause rerender */}
          <button className="logo">
            <Link to={`/profile/${username}`}>
              <img src={logo} alt="Logo" />
            </Link>
          </button>
        </header>
        <nav className="signup-login">
          <Link to={`/profile/${username}/get-recipes`}>Get Recipes</Link>
          <Link to={`/profile/${username}/my-recipes`}>My Recipes</Link>
          <Link to={`/profile/${username}/my-account`}>My Account</Link>
        </nav>
      </div>
    );
  }
}

export default MainNav;
