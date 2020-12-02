import { Route } from "react-router-dom";
import React from "react";
import "./App.css";
import LandingNav from "./Nav/LandingNav";
import LandingMain from "./Main/LandingMain/LandingMain";
import SignUp from "./Main/SignUp";
import Login from "./Main/Login";
import MainNav from "./Nav/MainNav";
import UserHomePage from "./Main/UserHomePage";
import MyPantry from "./Main/MyPantry";
import MyRecipes from "./Main/MyRecipes";
import MyAccount from "./Main/MyAccount";

class App extends React.Component {
  renderNavRoutes() {
    return (
      <React.Fragment>
        <Route exact path={["/", "/signup", "/login"]} component={LandingNav} />
        <Route path="/username" component={MainNav} />
      </React.Fragment>
    );
  }

  renderMainRoutes() {
    return (
      <React.Fragment>
        <Route exact path="/" component={LandingMain} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/username" component={UserHomePage} />
        <Route path="/username/my-pantry" component={MyPantry} />
        <Route path="/username/my-recipes" component={MyRecipes} />
        <Route path="/username/my-account" component={MyAccount} />
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="App">
        {/* IF logged in, to='/username' : to='/' */}
        <nav class="app-nav">{this.renderNavRoutes()}</nav>
        <main className="app-main">{this.renderMainRoutes()}</main>

        <footer>&#169;Gliss</footer>
      </div>
    );
  }
}

export default App;
