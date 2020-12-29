import { React, Component } from 'react';
import ItemApiService from '../../Services/item-api-service';

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

  render() {
    const { item, dateCreated } = this.props.item;
    const date = new Date(dateCreated);
    return (
      <li>
        {item}
        <button type="button" onClick={this.handleClickDelete}>
          x
        </button>
      </li>
    );
  }
}
