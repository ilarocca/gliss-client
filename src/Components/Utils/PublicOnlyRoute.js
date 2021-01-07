import { React, useContext } from 'react';
import AuthContext from '../../Contexts/AuthContext';
import { Route, Redirect } from 'react-router-dom';
import TokenService from '../../Services/TokenService';

export default function PublicOnlyRoute({ component, ...props }) {
  const Component = component;
  const context = useContext(AuthContext);

  return (
    <Route
      {...props}
      render={(componentProps) =>
        TokenService.hasAuthToken() ? (
          <Redirect to={`/profile/${context.currentUser.username}`} />
        ) : (
          <Component {...componentProps} />
        )
      }
    />
  );
}
