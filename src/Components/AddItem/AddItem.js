import { React, Component } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import ItemApiService from '../../Services/item-api-service';

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
    const { item, categoryId, userId } = this.state;
    console.log(categoryId);
    const newItem = { item, categoryId, userId };
    try {
      await ItemApiService.addItem(newItem);
      this.props.addItem();
      this.setState({
        item: '',
      });
    } catch (err) {
      this.setState({ error: err.message });
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
    console.log(this.state);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="error-msg">{this.state.error}</div>
        <div>
          <label for="item">Item</label>
          <input
            type="text"
            name="item"
            id="item"
            placeholder="rice, chicken, etc."
            value={this.state.item}
            onChange={this.handleChange}
          />
        </div>

        <select name="categoryId" id="js-item-type" value={this.state.categoryId} onChange={this.handleChange}>
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
        <button type="submit">Add Item</button>
      </form>
    );
  }
}
