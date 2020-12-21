import { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../Contexts/AuthContext';
import './LandingNav/LandingNav.css';
import logo from '../Images/logo.png';
import './MainNav.css';

// function backToHome() {
//   return <div>back home</div>;
// }

class MainNav extends Component {
  static contextType = AuthContext;

  handleClick = (e) => {
    e.preventDefault();
    this.props.setRecipes([]);
  };

  render() {
    return (
      <div className="LandingNav">
        <header className="logo-header">
          <button className="logo" onClick={this.handleClick}>
            <Link to="/username">
              <img src={logo} alt="Logo" />
            </Link>
          </button>
        </header>
        <nav className="signup-login">
          <Link to="/username/my-pantry">My Pantry</Link>
          <Link to="/username/my-recipes">My Recipes</Link>
          <Link to="/username/my-account">My Account</Link>
        </nav>
      </div>
    );
  }
}

export default MainNav;
