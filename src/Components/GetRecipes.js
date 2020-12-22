import { React, Component } from 'react';
import AuthContext from '../Contexts/AuthContext';
import ItemApiService from '../Services/item-api-service';
import { withRouter } from 'react-router-dom';
require('dotenv').config();

class GetRecipes extends Component {
  static contextType = AuthContext;
  state = {
    user: this.context.currentUser,
    items: [],
    ingredients: '',
    placeholder: '',
    error: '',
  };

  async componentDidMount() {
    //pick three random user ingredients and assign them to placeholder
    const userItems = await ItemApiService.items(this.state.user.id);

    if (userItems.length >= 3) {
      const numbers = [];
      for (let i = 0; i < 3; i++) {
        numbers.push(Math.floor(Math.random() * userItems.length));
      }
      const uniq = [...new Set(numbers)];
      const userIngredients = uniq.map((u) => userItems[u].item).join(', ');

      // this.props.setIngredients(userIngredients);
      this.setState({
        ingredients: userIngredients,
      });
    }
    this.setState({
      items: userItems,
    });
  }

  componentWillReceiveProps() {
    this.componentDidMount();
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    //rerender empty homepage state
    this.props.setRecipes([]);
    this.setState({ error: null });
    const { ingredients } = this.state;
    // this.props.setQuery(ingredients);
    try {
      const apiId = 'app_id=' + process.env.REACT_APP_API_ID;
      const apiKey = 'app_key=' + process.env.REACT_APP_API_KEY;
      const proxy = 'https://calm-badlands-65255.herokuapp.com/';
      const res = await fetch(`${proxy}https://api.edamam.com/search?q=${ingredients}&${apiId}&${apiKey}`, {
        method: 'GET',
      });
      const json = await res.json();
      //update homepage state with json of recipes
      //call setRecipes to update UserHomePage state
      this.props.setRecipes(json.hits);
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  handleDelete = () => {
    if (this.props.userQuery && this.state.ingredients === '') {
      this.props.setQuery();
    }
  };

  render() {
    return (
      <form className="js-recipe-form" onSubmit={this.handleSubmit}>
        <div>
          <label for="item">Ingredients</label>
          <input
            type="text"
            name="ingredients"
            id="ingredients"
            value={this.state.ingredients}
            onChange={this.handleChange}
            onEmptied={this.handleEmptied}
            placeholder={'steak, potatoes, etc'}
          />
        </div>

        <button type="submit">Get Recipes</button>
      </form>
    );
  }
}

export default withRouter(GetRecipes);
