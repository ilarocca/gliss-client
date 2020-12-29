import React from 'react';
import ReactDOM from 'react-dom';
import Ingredients from './Ingredients';

describe('Ingredient Component', () => {
  const category = [
    {
      category: 'Meat',
      categoryId: 2,
      dateCreated: '2020-12-22T02:55:07.872Z',
      id: 178,
      item: 'chicken',
      userId: 103,
    },
  ];
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Ingredients category={category} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
