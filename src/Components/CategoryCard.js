import { Component } from 'react';
import Item from './Item';

export default class CategoryCard extends Component {
  state = {
    items: this.props.category,
    category: this.props.category[0].category,
  };

  deleteItem = (id) => {
    console.log('delete');
    this.setState((prevState) => {
      const newItems = prevState.items.filter((item) => item.id !== id);
      return {
        items: newItems,
      };
    });
    this.props.deleteItem(id);
  };
  render() {
    console.log(this.state.items);
    return (
      <div>
        <h3>{this.state.category}</h3>

        <ul>
          {this.state.items.map((item) => (
            <li key={item.id}>
              <Item item={item} deleteItem={this.deleteItem} />
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
