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
    mounted: false,
  };

  async componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser = async () => {
    if (TokenService.hasAuthToken()) {
      try {
        const user = await AuthApiService.getCurrentUser();
        this.setState({ currentUser: user, mounted: true });
      } catch (err) {
        this.setState({ error: err.message });
      }
    } else {
      this.setState({ mounted: true });
    }
  };

  login = (token) => {
    TokenService.saveAuthToken(token);
  };

  logout = () => {
    TokenService.clearAuthToken();
    this.setState({ hasAuth: false, currentUser: null });
  };

  setCurrentUser = (user) => {
    this.setState({ currentUser: user });
  };

  render() {
    // fetch current user before render
    if (this.state.mounted === false) {
      return <></>;
    } else {
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
}
