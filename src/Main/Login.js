import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component {
  render() {
    return (
      <div>
        <header role="banner">
          <h3>Don't forget to make me some.</h3>
        </header>

        <form>
          <div>
            <label for="username">Username</label>
            <input type="text" name="username" id="username" />
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <Link to="/username">
            <button type="submit">Login</button>
          </Link>
        </form>
      </div>
    );
  }
}

export default Login;
