import { Component } from 'react';
export default class RecipeColumn extends Component {
  handleCheck = (e) => {
    this.props.handleCheck(e);
  };
  render() {
    const category = this.props.category[0].category;
    return (
      <fieldset>
        <legend for={category}>{category}</legend>

        {this.props.category.map((item) => (
          <div>
            <input type="checkbox" value={item.item} onChange={this.handleCheck} />
            <label htmlFor={item.itemcategory}>{item.item}</label>
          </div>
        ))}
      </fieldset>
    );
  }
}
