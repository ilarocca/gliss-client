import { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Contexts/AuthContext';
import '../LandingNav/LandingNav.css';
import logo from '../../Images/logo2.png';
import { GiHamburgerMenu } from 'react-icons/gi';
import './MainNav1.css';

// function backToHome() {
//   return <div>back home</div>;
// }

class MainNav extends Component {
  static contextType = AuthContext;

  state = {
    username: this.context.currentUser.username,
    clicked: false,
  };

  //toggle mobile nav bar
  handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();

    let mainNav = document.getElementById('js-menu');
    mainNav.classList.toggle('active');
  };

  render() {
    const username = this.state.username;
    return (
      <nav className="navbar">
        <span className="navbar-toggle" id="js-navbar-toggle" onClick={this.handleClick}>
          <GiHamburgerMenu />
        </span>
        <button className="logo">
          <Link to={`/profile/${username}`}>
            <img src={logo} alt="Logo" className="MainLogo" />
          </Link>
        </button>

        <ul className="main-nav" id="js-menu">
          <li>
            <Link to={`/profile/${username}/get-recipes`} className="nav-links">
              Get Recipes
            </Link>
          </li>
          <li>
            <Link to={`/profile/${username}/my-recipes`} className="nav-links">
              My Recipes
            </Link>
          </li>
          <li>
            <Link to={`/profile/${username}/my-account`} className="nav-links">
              My Account
            </Link>
          </li>
        </ul>
      </nav>
    );
  }
}

export default MainNav;
