import React, { Component } from 'react';
import AuthApiService from '../Services/auth-api-service';
import TokenService from '../Services/TokenService';

const AuthContext = React.createContext({
  logout: () => {},
  login: () => {},
  setCurrentUser: () => {},
  clearError: () => {},
  hasAuth: false,
  currentUser: null,
  error: null,
});
export default AuthContext;

export class AuthProvider extends Component {
  state = {
    hasAuth: TokenService.hasAuthToken(),
    currentUser: null,
    error: null,
  };

  async componentDidMount() {
    this.getCurrentUser();
  }

  async getCurrentUser(id) {
    if (TokenService.hasAuthToken()) {
      try {
        const user = await AuthApiService.getCurrentUser(id);
        this.setState({ currentUser: user });
      } catch (err) {
        this.setState({ error: err.message });
      }
    }
  }

  login = (token) => {
    TokenService.saveAuthToken(token);
    this.setState({ hasAuth: true });
  };

  logout = () => {
    TokenService.clearAuthToken();
    this.setState({ hasAuth: false });
  };

  setCurrentUser = (user) => {
    this.setState({ currentUser: user });
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          login: this.login,
          logout: this.logout,
          setCurrentUser: this.setCurrentUser,
          clearError: this.clearError,
        }}
      >
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
