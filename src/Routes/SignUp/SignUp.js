import React, { Component } from 'react';
import Validator from '../../Components/Validator/Validator';
import AuthApiService from '../../Services/auth-api-service';
import AuthContext from '../../Contexts/AuthContext';
import './SignUp.css';
import cooking from './cooking.jpg';
import eat from './eat.jpg';

export default class SignUp extends Component {
  static contextType = AuthContext;

  state = {
    firstName: '',
    firstNameValid: false,
    lastName: '',
    lastNameValid: false,
    username: '',
    usernameValid: false,
    password: '',
    passwordValid: false,
    formValid: false,
    error: '',
    validationError: {},
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    this.setState({ error: null });
    const { firstName, lastName, username, password } = this.state;
    const newUser = { firstName, lastName, username, password };
    try {
      const savedUser = await AuthApiService.createUser(newUser);
      // save authToken to local storage
      this.context.login(savedUser.authToken);
      delete savedUser.authToken;
      // save user info to context
      this.context.setCurrentUser(savedUser.user);
      // set next route on submit
      this.props.history.push(`/profile/${username}`);
    } catch (err) {
      this.setState({ error: err.message });
    }
  };

  componentWillUnmount() {
    this.setState({ error: null });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(
      {
        [name]: value,
      },
      name === 'password' ? this.validatePassword : null
    );
  };

  validateForm = () => {
    const { firstNameValid, lastNameValid, usernameValid, passwordValid } = this.state;
    this.setState({
      formValid: firstNameValid && lastNameValid && usernameValid && passwordValid,
    });
  };

  validateFirstName = () => {
    let firstNameValid = true;
    const validationError = { ...this.state.validationError };
    const { firstName } = this.state;

    if (firstName.startsWith(' ') || firstName.endsWith(' ')) {
      firstNameValid = false;
      validationError.firstName = 'Cannot begin or end with spaces.';
    } else if (firstName.length < 2 || firstName.length > 20) {
      firstNameValid = false;
      validationError.firstName = 'Must be between 2 and 20 charachters.';
    }

    this.setState({ firstNameValid, validationError }, this.validateForm);
  };

  validateLastName = () => {
    let lastNameValid = true;
    const validationError = { ...this.state.validationError };
    const { lastName } = this.state;

    if (lastName.startsWith(' ') || lastName.endsWith(' ')) {
      lastNameValid = false;
      validationError.lastName = 'Cannot begin or end with spaces.';
    } else if (lastName.length < 2 || lastName.length > 20) {
      lastNameValid = false;
      validationError.lastName = 'Must be between 2 and 20 charachters.';
    }

    this.setState({ lastNameValid, validationError }, this.validateForm);
  };

  validateUsername = () => {
    let usernameValid = true;
    const validationError = { ...this.state.validationError };
    const { username } = this.state;

    if (username.startsWith(' ') || username.endsWith(' ')) {
      usernameValid = false;
      validationError.username = 'Cannot begin or end with spaces.';
    } else if (username.length < 4 || username.length > 25) {
      usernameValid = false;
      validationError.username = 'Must be between 4 and 25 charachters.';
    }

    this.setState({ usernameValid, validationError }, this.validateForm);
  };

  validatePassword = () => {
    let passwordValid = true;
    const validationError = { ...this.state.validationError };
    const { password } = this.state;

    if (password.startsWith(' ') || password.endsWith(' ')) {
      passwordValid = false;
      validationError.password = 'Cannot begin or end with spaces.';
    } else if (password.length < 4) {
      passwordValid = false;
      validationError.password = 'Must be at least 4 charachters.';
    }

    this.setState({ passwordValid, validationError }, this.validateForm);
  };

  render() {
    const { validationError, firstNameValid, lastNameValid, usernameValid, passwordValid, formValid } = this.state;

    return (
      <div>
        <header role="banner" className="signup-header">
          <h3>Let's get cooking.</h3>
        </header>
        <div className="signup">
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <div>{this.state.error}</div>

            <div className="signup-field">
              <label for="firstName">First Name</label>
              <input
                placeholder=""
                type="text"
                name="firstName"
                id="firstName"
                className="signup-input"
                value={this.state.firstName}
                onChange={this.handleChange}
                onBlur={this.validateFirstName}
              />
            </div>

            <div className="validator">
              <Validator isValid={firstNameValid} msg={validationError.firstName} className="validator" />
            </div>

            <div className="signup-field">
              <label for="lastName">Last Name</label>
              <input
                placeholder=""
                type="text"
                name="lastName"
                id="lastName"
                className="signup-input"
                value={this.state.lastName}
                onChange={this.handleChange}
                onBlur={this.validateLastName}
              />
            </div>

            <div className="validator">
              <Validator isValid={lastNameValid} msg={validationError.lastName} className="validator" />
            </div>

            <div className="signup-field">
              <label for="username">Username</label>
              <input
                placeholder=""
                type="text"
                name="username"
                className="signup-input"
                id="username"
                value={this.state.username}
                onChange={this.handleChange}
                onBlur={this.validateUsername}
              />
            </div>

            <div className="validator">
              <Validator isValid={usernameValid} msg={validationError.username} />
            </div>

            <div className="signup-field">
              <label for="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="signup-input"
                value={this.state.password}
                onChange={this.handleChange}
                onBlur={this.validatePassword}
              />
            </div>

            <div className="validator">
              <Validator isValid={passwordValid} msg={validationError.password} />
            </div>

            <button disabled={!formValid} type="submit" className="signup-button">
              Sign Up
            </button>
          </form>
        </div>
        {/* <div className="signup-images">
          <img src={cooking} alt="cooking together" />
          <img src={eat} alt="dig in" />
        </div> */}
      </div>
    );
  }
}
