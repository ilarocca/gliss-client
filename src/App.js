import { Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import LandingNav from './Routes/LandingNav/LandingNav';
import LandingMain from './Routes/LandingMain/LandingMain';
import SignUp from './Routes/SignUp/SignUp';
import Login from './Routes/Login/Login';
import MainNav from './Routes/MainNav/MainNav';
import UserHomePage from './Routes/UserHomePage/UserHomePage';
import MyRecipes from './Routes/MyRecipes/MyRecipes';
import MyAccount from './Routes/MyAccount/MyAccount';
import GetRecipes from './Routes/GetRecipe/GetRecipes';

class App extends React.Component {
  state = {
    recipes: [],
  };

  setRecipes = async (recipes) => {
    await this.setState({
      recipes: recipes,
    });
  };

  renderNavRoutes() {
    return (
      <React.Fragment>
        <Route exact path={['/', '/signup', '/login']} component={LandingNav} />
        <Route
          path="/profile/:username"
          render={(props) => <MainNav {...props} setRecipes={this.setRecipes} recipes={this.state.recipes} />}
        />
      </React.Fragment>
    );
  }

  renderMainRoutes() {
    return (
      <React.Fragment>
        <Route exact path="/" component={LandingMain} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route exact path="/profile/:username" render={(props) => <UserHomePage {...props} />} />
        <Route
          path="/profile/:username/get-recipes"
          render={(props) => <GetRecipes {...props} setRecipes={this.setRecipes} />}
        />
        <Route path="/profile/:username/my-recipes" component={MyRecipes} />
        <Route path="/profile/:username/my-account" component={MyAccount} />
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="App">
        <nav className="app-nav">{this.renderNavRoutes()}</nav>
        <main className="app-main">{this.renderMainRoutes()}</main>
      </div>
    );
  }
}

export default App;
