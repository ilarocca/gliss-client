import React from 'react';
import ReactDOM from 'react-dom';
import AuthContext from '../../Contexts/AuthContext';
import AddItem from './AddItem';

describe('AddItem Component', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    div.setAttribute('id', 'root');
    ReactDOM.render(
      <AuthContext.Provider value={{ currentUser: { id: 1 } }}>
        <AddItem />
      </AuthContext.Provider>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });
});
