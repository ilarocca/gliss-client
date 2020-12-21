import config from '../config';
import TokenService from './TokenService';

const ItemApiService = {
  async items(userId) {
    const res = await fetch(`${config.API_ENDPOINT}/users/${userId}/items`, {
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

  async addItem(newItem) {
    const res = await fetch(`${config.API_ENDPOINT}/items/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newItem),
    });
    if (!res.ok) {
      return res.json().then((e) => Promise.reject(e));
    }
    return res.json();
  },

  async deleteItem(userId, itemId) {
    const res = await fetch(`${config.API_ENDPOINT}/items/${userId}/${itemId}`, {
      method: 'DELETE',
      headers: {
        'content-type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
    });
    if (!res.ok) {
      return res.json().then((e) => Promise.reject(e));
    }
  },
};

export default ItemApiService;
