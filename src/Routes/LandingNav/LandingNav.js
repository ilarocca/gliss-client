import { Link } from 'react-router-dom';
import './LandingNav.css';
import { useContext } from 'react';
import logo from '../../Images/logo2.png';
import AuthApiService from '../../Services/auth-api-service';
import AuthContext from '../../Contexts/AuthContext';

function LandingNav() {
  const context = useContext(AuthContext);

  async function handleClick(e) {
    e.preventDefault();
    try {
      //login using demo account
      const response = await AuthApiService.login('user1234', 'password');
      context.login(response.authToken);
      delete response.authToken;
      context.setCurrentUser(response.user);
      this.props.history.push(`/profile/user1234`);
    } catch (err) {
      return err.message;
    }
  }
  return (
    <div className="LandingNav">
      <header className="LandingHeader">
        <Link to="/">
          <img src={logo} alt="Gliss" className="LandingTitle" />
        </Link>
      </header>
      <nav className="signup-login">
        <Link to="/login" className="login-link">
          Log In
        </Link>
        <Link to="/signup" className="signup-link">
          Sign Up
        </Link>
        <button onClick={handleClick}>Demo</button>
      </nav>
    </div>
  );
}

export default LandingNav;
