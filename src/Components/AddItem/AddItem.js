import { React, Component } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import ItemApiService from '../../Services/item-api-service';
import './AddItem.css';

export default class AddItem extends Component {
  static contextType = AuthContext;

  state = {
    item: '',
    categoryId: '1',
    userId: this.context.currentUser.id,
    error: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ error: null });
    if (this.state.item === '') {
      this.setState({ error: 'Please enter an item name' });
    } else {
      const { item, categoryId, userId } = this.state;
      const newItem = { item, categoryId, userId };
      try {
        await ItemApiService.addItem(newItem);
        //trigger parent component rerender
        this.props.addItem();
        this.setState({
          item: '',
        });
      } catch (err) {
        this.setState({ error: err.message });
      }
    }
  };

  componentWillUnmount() {
    this.setState({ error: null });
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <form className="add-item-form" onSubmit={this.handleSubmit}>
        <div className="error-msg">{this.state.error}</div>
        <div className="inputs">
          <label className="item-label" htmlFor="item-input">
            Item
            <input
              className="item-input"
              type="text"
              name="item"
              id="item"
              placeholder="rice, chicken, etc."
              value={this.state.item}
              onChange={this.handleChange}
            />
          </label>
          <label htmlFor="category">
            <select
              name="categoryId"
              id="js-item-type"
              className="category"
              value={this.state.categoryId}
              onChange={this.handleChange}
            >
              <option value="1">Grain</option>
              <option value="2">Meat</option>
              <option value="3">Fish</option>
              <option value="4">Vegetable</option>
              <option value="5">Fruit</option>
              <option value="6">Seasoning</option>
              <option value="7">Sauce</option>
              <option value="8">Baking</option>
              <option value="9">Sweets</option>
              <option value="10">Misc</option>
            </select>
          </label>
        </div>
        <button type="submit" className="item-submit">
          Add Item
        </button>
      </form>
    );
  }
}
