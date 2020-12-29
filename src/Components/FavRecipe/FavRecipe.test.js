import React from 'react';
import ReactDOM from 'react-dom';
import FavRecipe from './FavRecipe';

describe('FavRecipe Component', () => {
  const recipe = [
    {
      dateCreated: '2020-12-17T20:09:01.379Z',
      id: 39,
      img: 'https://www.edamam.com/web-img/08f/08f732f0e2c9513e531669f0026dca01.jpg',
      recipeName: 'Beach-Shack Shrimp Tacos with Cucumber Salad',
      url:
        'http://www.delish.com/cooking/recipe-ideas/recipes/a34970/beach-shack-shrimp-tacos-cucumber-salad-recipe-121266/',
      userId: 103,
    },
  ];
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<FavRecipe recipe={recipe} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
