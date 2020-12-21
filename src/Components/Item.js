import { React, Component } from 'react';
import ItemApiService from '../Services/item-api-service';

export default class Item extends Component {
  state = {
    userId: this.props.item.userId,
    itemId: this.props.item.id,
  };

  handleClickDelete = async (e) => {
    e.preventDefault();
    const { userId, itemId } = this.state;
    await ItemApiService.deleteItem(userId, itemId);
    this.props.deleteItem(itemId);
  };

  addToQuery = (e) => {
    e.preventDefault();
    const queryItem = this.props.item.item + ', ';
    // const stringQueryItem = queryItem.join(', ');
    this.props.addToQuery(queryItem);
  };

  getCategory = (categoryId) => {
    let categories = {
      Grain: 1,
      Meat: 2,
      Fish: 3,
      Vegetable: 4,
      Fruit: 5,
      Seasoning: 6,
      Sauce: 7,
      Baking: 8,
      Sweets: 9,
      Misc: 10,
    };
    // compare object key with category id, return category name
    const category = Object.keys(categories).find((key) => categories[key] === categoryId);
    return category;
  };

  render() {
    const { item, categoryId, dateCreated } = this.props.item;
    const date = new Date(dateCreated);
    return (
      <li>
        <h3>{item}</h3>
        <p>{this.getCategory(categoryId)}</p>
        <p>{date.toString().split(' ').slice(0, 4).join(' ')}</p>

        <button>Edit</button>
        <button type="button" onClick={this.handleClickDelete}>
          Delete
        </button>
        <button type="button" onClick={this.addToQuery}>
          +
        </button>
      </li>
    );
  }
}
