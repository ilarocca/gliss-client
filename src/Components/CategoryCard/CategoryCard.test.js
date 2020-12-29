import React from 'react';
import ReactDOM from 'react-dom';
import CategoryCard from './CategoryCard';

describe('CategoryCard Component', () => {
  const category = [
    {
      category: 'Grain',
      categoryId: 1,
      dateCreated: '2020-12-23T01:12:50.802Z',
      id: 212,
      item: 'rice',
      userId: 103,
    },
  ];
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CategoryCard category={category} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
