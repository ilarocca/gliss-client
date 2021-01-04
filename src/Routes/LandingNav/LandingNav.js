import { Link } from 'react-router-dom';
import './LandingNav.css';
import logo from '../../Images/logo2.png';

function LandingNav() {
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
      </nav>
    </div>
  );
}

export default LandingNav;
