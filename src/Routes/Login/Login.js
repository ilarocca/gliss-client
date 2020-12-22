import React from 'react';
import AuthApiService from '../../Services/auth-api-service';
import AuthContext from '../../Contexts/AuthContext';

class Login extends React.Component {
  static contextType = AuthContext;
  state = {
    error: null,
    username: '',
    password: '',
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ error: null });
    try {
      const { username, password } = this.state;
      const response = await AuthApiService.login(username, password);
      // save authToken to local storage
      this.context.login(response.authToken);
      delete response.authToken;
      // save user info to context
      this.context.setCurrentUser(response.user);
      // set next route on submit
      this.props.history.push('/username');
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  componentWillUnmount() {
    this.setState({ error: null });
  }
  handleChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <header role="banner">
          <h3>Don't forget to make me some.</h3>
        </header>

        <form className="js-login-form" action="#" onSubmit={this.handleSubmit}>
          <div className="error-msg">{this.state.error}</div>
          <div>
            <label for="username">Username</label>
            <input type="text" name="username" id="username" value={this.state.username} onChange={this.handleChange} />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;
