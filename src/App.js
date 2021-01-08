import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingNav from './Routes/LandingNav/LandingNav';
import LandingMain from './Routes/LandingMain/LandingMain';
import SignUp from './Routes/SignUp/SignUp';
import Login from './Routes/Login/Login';
import MainNav from './Routes/MainNav/MainNav';
import UserHomePage from './Routes/UserHomePage/UserHomePage';
import MyRecipes from './Routes/MyRecipes/MyRecipes';
import MyAccount from './Routes/MyAccount/MyAccount';
import GetRecipes from './Routes/GetRecipe/GetRecipes';
import PageNotFound from './Routes/PageNotFound/PageNotFound';
import AuthContext from './Contexts/AuthContext';
import PublicOnlyRoute from './Components/Utils/PublicOnlyRoute';
import PrivateRoute from './Components/Utils/PrivateRoute';

class App extends React.Component {
  static contextType = AuthContext;

  renderNavRoutes() {
    return (
      <React.Fragment>
        <PublicOnlyRoute exact path={['/', '/signup', '/login']} component={LandingNav} />
        <PrivateRoute path="/profile/:username" component={MainNav} />
      </React.Fragment>
    );
  }

  renderMainRoutes() {
    return (
      <Switch>
        <PublicOnlyRoute exact path="/" component={LandingMain} />
        <PublicOnlyRoute path="/signup" component={SignUp} />
        <PublicOnlyRoute path="/login" component={Login} />
        <PrivateRoute exact path="/profile/:username" component={UserHomePage} />
        <PrivateRoute path="/profile/:username/get-recipes" component={GetRecipes} />
        <PrivateRoute path="/profile/:username/my-recipes" component={MyRecipes} />
        <PrivateRoute path="/profile/:username/my-account" component={MyAccount} />
        <Route component={PageNotFound} />
      </Switch>
    );
  }

  render() {
    return (
      <div className="App">
        <nav className="app-nav">{this.renderNavRoutes()}</nav>
        <main className="app-main">{this.renderMainRoutes()}</main>
        <div>{this.context.error}</div>
      </div>
    );
  }
}

export default App;
