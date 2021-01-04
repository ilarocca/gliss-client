import React from 'react';
import ReactDOM from 'react-dom';
import AuthContext from '../../Contexts/AuthContext';
import AddItem from './AddItem';

describe('AddItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    const AppContext = jest.fn();
    ReactDOM.render(
      <AuthContext.Provider value={{ AppContext }}>
        <AddItem />
      </AuthContext.Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
