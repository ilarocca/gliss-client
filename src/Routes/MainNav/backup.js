import { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Contexts/AuthContext';
import '../LandingNav/LandingNav.css';
import logo from '../../Images/logo.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import './MainNav1.css';

// function backToHome() {
//   return <div>back home</div>;
// }

class MainNav extends Component {
  static contextType = AuthContext;

  state = {
    username: this.context.currentUser.username,
  };

  handleClick = (e) => {
    e.preventDefault();
    let mainNav = document.getElementById('js-menu');
    let navBarToggle = document.getElementById('js-navbar-toggle');

    navBarToggle.addEventListener('click', function () {
      mainNav.classList.toggle('active');
    });
  };

  render() {
    const username = this.state.username;
    return (
      <nav className="MainNav">
        <div className="MainHeader">
          <button className="logo">
            <Link to={`/profile/${username}`}>
              <img src={logo} alt="Logo" className="MainLogo" />
            </Link>
          </button>
        </div>
        <span className="navbar-toggle" id="js-navbar-toggle" onClick={this.handleClick}>
          <GiHamburgerMenu />
        </span>
        <div className="action-nav" id="js-menu">
          <ul>
            <li>
              <Link to={`/profile/${username}/get-recipes`} className="nav-link">
                Get Recipes
              </Link>
            </li>
            <li>
              <Link to={`/profile/${username}/my-recipes`} className="nav-link">
                My Recipes
              </Link>
            </li>
            <li>
              <Link to={`/profile/${username}/my-account`} className="nav-link">
                My Account
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
