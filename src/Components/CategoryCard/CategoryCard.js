import { Component } from 'react';
import Item from '../Item/Item';
import Icon from './Icon';
import './CategoryCard.css';

export default class CategoryCard extends Component {
  state = {
    items: this.props.category,
    category: this.props.category[0].category,
  };

  // upon receiving new props, rerenders to update items
  componentWillReceiveProps(props) {
    this.setState({
      items: props.category,
    });
  }

  deleteItem = (id) => {
    this.setState((prevState) => {
      const newItems = prevState.items.filter((item) => item.id !== id);
      return {
        items: newItems,
      };
    });
    this.props.deleteItem();
  };
  render() {
    return (
      <fieldset className="category-box">
        <div className="pantry-icon">
          {this.state.items.length > 0 ? <Icon category={this.state.items[0].categoryId} /> : null}
        </div>
        <h3 className="category-name">{this.state.category} </h3>

        <ul className="items">
          {this.state.items.map((item) => (
            <li key={item.id}>
              <Item item={item} deleteItem={this.deleteItem} />
            </li>
          ))}
        </ul>
      </fieldset>
    );
  }
}
