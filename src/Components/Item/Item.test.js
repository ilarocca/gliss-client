import React from 'react';
import ReactDOM from 'react-dom';
import Item from './Item';

describe('Item Component', () => {
  const item = [
    {
      category: 'Misc',
      categoryId: 10,
      dateCreated: '2020-12-16T21:17:43.300Z',
      id: 121,
      item: 'honey',
      userId: 103,
    },
  ];
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Item item={item} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
