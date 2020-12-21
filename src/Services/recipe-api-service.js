import config from '../config';
import TokenService from './TokenService';

const RecipeApiService = {
  async recipes(userId) {
    const res = await fetch(`${config.API_ENDPOINT}/users/${userId}/recipes`, {
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

  async addRecipe(newRecipe) {
    const res = await fetch(`${config.API_ENDPOINT}/recipes/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newRecipe),
    });
    if (!res.ok) {
      return res.json().then((e) => Promise.reject(e));
    }
    return res.json();
  },

  async deleteRecipe(userId, recipeId) {
    const res = await fetch(`${config.API_ENDPOINT}/recipes/${userId}/${recipeId}`, {
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

export default RecipeApiService;
