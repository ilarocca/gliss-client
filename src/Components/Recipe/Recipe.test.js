import React from 'react';
import ReactDOM from 'react-dom';
import Recipe from './Recipe';

describe('Recipe Component', () => {
  const recipe = [
    {
      label: 'The Best Baked Spinach',
      url: 'http://smittenkitchen.com/2011/03/the-best-baked-spinach/',
      ingredientLines: ['spinach', 'baked', 'best'],
      image: 'https://www.edamam.com/web-img/b94/b94bcc492bee10e0bade479acf6387b9.jpg',
    },
  ];
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Recipe recipe={recipe} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
