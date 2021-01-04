import { Component } from 'react';
import Icon from '../CategoryCard/Icon';
import './Ingredients.css';
export default class Ingredients extends Component {
  handleCheck = (e) => {
    this.props.handleCheck(e);
  };
  render() {
    const category = this.props.category[0].category;
    return (
      <fieldset className="ingredient-box">
        <Icon category={this.props.category[0].categoryId} />
        <h3 for={category} className="category-name">
          {category}
        </h3>

        {this.props.category.map((item) => (
          <div className="ingredient">
            <input type="checkbox" value={item.item} onChange={this.handleCheck} />
            <label htmlFor={item.itemcategory}>{item.item}</label>
          </div>
        ))}
      </fieldset>
    );
  }
}
