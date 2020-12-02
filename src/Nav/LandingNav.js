import { Link } from "react-router-dom";
import "./LandingNav.css";

function LandingNav() {
  return (
    <div className="LandingNav">
      <header className="logo">
        <Link to="/">G</Link>
      </header>
      <nav className="signup-login">
        <Link to="/signup">Sign Up</Link>
        <Link to="/login">Login</Link>
      </nav>
    </div>
  );
}

export default LandingNav;
