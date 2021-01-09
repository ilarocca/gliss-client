import config from '../config';
import TokenService from './TokenService';

const AuthApiService = {
  async login(username, password) {
    const loginData = { username, password };
    const res = await fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(loginData),
    });
    if (!res.ok) {
      return res.json().then((e) => Promise.reject(e));
    }
    return res.json();
  },

  async createUser(userData) {
    const res = await fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    if (!res.ok) {
      return res.json().then((e) => Promise.reject(e));
    }
    return res.json();
  },

  async getCurrentUser() {
    const res = await fetch(`${config.API_ENDPOINT}/auth/current-user`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    });

    if (!res.ok) {
      return res.json().then((e) => Promise.reject(e));
    }
    return res.json();
  },
};

export default AuthApiService;
