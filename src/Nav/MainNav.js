import { Link } from "react-router-dom";
import "./LandingNav.css";

function MainNav() {
  return (
    <div className="LandingNav">
      <header className="logo">
        <Link to="/username">Gliss</Link>
      </header>
      <nav className="signup-login">
        <Link to="/username/my-pantry">My Pantry</Link>
        <Link to="/username/my-recipes">My Recipes</Link>
        <Link to="/username/my-account">My Account</Link>
      </nav>
    </div>
  );
}

export default MainNav;
