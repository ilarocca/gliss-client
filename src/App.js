import { Route } from 'react-router-dom';
import React from 'react';
import './App.css';
import LandingNav from './Components/LandingNav/LandingNav';
import LandingMain from './Components/LandingMain/LandingMain';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import MainNav from './Components/MainNav';
import UserHomePage from './Components/UserHomePage';
import MyPantry from './Components/MyPantry';
import MyRecipes from './Components/MyRecipes';
import MyAccount from './Components/MyAccount';

class App extends React.Component {
  state = {
    recipes: [],
    // ingredients: '',
  };

  setRecipes = async (recipes) => {
    await this.setState({
      recipes: recipes,
    });
  };

  // setIngredients = async (ingredients) => {
  //   await this.setState({
  //     ingredients: ingredients,
  //   });
  //   console.log(this.state.ingredients);
  // };

  renderNavRoutes() {
    return (
      <React.Fragment>
        <Route exact path={['/', '/signup', '/login']} component={LandingNav} />
        <Route
          path="/username"
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
        <Route
          exact
          path="/username"
          render={(props) => (
            <UserHomePage
              {...props}
              setRecipes={this.setRecipes}
              recipes={this.state.recipes}
              // setIngredients={this.setIngredients}
              // ingredients={this.state.ingredients}
            />
          )}
        />
        <Route
          path="/username/my-pantry"
          render={(props) => (
            <MyPantry
              {...props}
              setRecipes={this.setRecipes}
              recipes={this.state.recipes}
              // setIngredients={this.setIngredients}
              // ingredients={this.state.ingredients}
            />
          )}
        />
        <Route path="/username/my-recipes" component={MyRecipes} />
        <Route path="/username/my-account" component={MyAccount} />
      </React.Fragment>
    );
  }

  render() {
    return (
      <div className="App">
        <nav class="app-nav">{this.renderNavRoutes()}</nav>
        <main className="app-main">{this.renderMainRoutes()}</main>

        <footer>&#169;Gliss</footer>
      </div>
    );
  }
}

export default App;
