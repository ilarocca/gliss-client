import { React, Component } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import { withRouter } from 'react-router-dom';
import Ingredients from '../Ingredients/Ingredients';
import './RecipesForm.css';
import Loader from 'react-loader-spinner';
require('dotenv').config();

class RecipesForm extends Component {
  static contextType = AuthContext;
  state = {
    user: this.context.currentUser,
    items: [],
    ingredients: [],
    placeholder: '',
    error: '',
    loading: false,
  };

  // async componentDidMount() {
  //   //pick three random user ingredients and assign them to placeholder
  //   const userItems = await ItemApiService.items(this.state.user.id);

  //   this.setState({
  //     items: userItems,
  //   });
  // }

  // componentWillReceiveProps() {
  //   this.componentDidMount();
  // }

  handleSubmit = async (e) => {
    e.preventDefault();
    //rerender empty homepage state
    this.props.setRecipes([]);
    this.setState({ error: null, loading: true });
    if (this.state.ingredients.length === 0) {
      this.setState({ error: 'Select at least one ingredient to continue' });
    } else {
      const ingredients = this.state.ingredients.join(', ');
      try {
        const apiId = 'app_id=' + process.env.REACT_APP_API_ID;
        const apiKey = 'app_key=' + process.env.REACT_APP_API_KEY;
        const proxy = 'https://calm-badlands-65255.herokuapp.com/';
        const res = await fetch(`${proxy}https://api.edamam.com/search?q=${ingredients}&${apiId}&${apiKey}`, {
          method: 'GET',
        });
        const json = await res.json();
        if (json.hits.length === 0 || undefined) {
          this.setState({
            error: 'No recipes found. Check the spelling of your ingredients or try a different combination.',
          });
        } else {
          //call setRecipes to update GetRecipes state with recipes
          this.props.setRecipes(json.hits);
          this.setState({
            loading: false,
          });
        }
      } catch (err) {
        this.setState({ error: err.message, loading: false });
      }
    }
  };

  handleCheck = (e) => {
    if (e.target.checked === true) {
      this.setState((prevState) => ({
        ingredients: [...prevState.ingredients, ...[e.target.value]],
      }));
    } else {
      const newIngredients = this.state.ingredients.filter((ingredient) => ingredient !== e.target.value);
      this.setState({
        ingredients: newIngredients,
      });
    }
  };

  // handleShuffle = () => {
  //   const userItems = this.state.items;
  //   const numbers = [];
  //   for (let i = 0; i < 3; i++) {
  //     numbers.push(Math.floor(Math.random() * userItems.length));
  //   }
  //   const uniq = [...new Set(numbers)];
  //   const userIngredients = uniq.map((u) => userItems[u].item);
  //   this.setState({
  //     ingredients: userIngredients,
  //   });
  // };

  handleDelete = () => {
    if (this.props.userQuery && this.state.ingredients === '') {
      this.props.setQuery();
    }
  };

  render() {
    return (
      <form className="js-recipe-form" onSubmit={this.handleSubmit}>
        {/* <div>
          <label for="item">Ingredients</label>
          <input
            type="text"
            name="ingredients"
            id="ingredients"
            value={this.state.ingredients.join(', ')}
            onChange={this.handleChange}
            onEmptied={this.handleEmptied}
            placeholder={'steak, potatoes, etc'}
          />
          <button type="button" onClick={this.handleShuffle}>
            shuffle
          </button>
        </div> */}
        <ul className="ingredients">
          {this.props.categoryCards.map((category) =>
            category.length === 0 ? null : (
              <li>
                <Ingredients category={category} handleCheck={this.handleCheck} />
              </li>
            )
          )}
        </ul>
        <button type="submit" className="recipe-submit">
          Get Recipes
        </button>
        <div className="error-message">{this.state.error}</div>
        {this.state.loading === true ? <Loader type="ThreeDots" color="Black" height={80} width={80} /> : null}
      </form>
    );
  }
}

export default withRouter(RecipesForm);
