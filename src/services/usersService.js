import apiClient from './apiClient';

const usersService = {
  login: (username, password) =>
    apiClient.post(`${process.env.REACT_APP_API_URL}/users/login`, { username, password }),
  register: (username, password) =>
    apiClient.post(`${process.env.REACT_APP_API_URL}/users/register`, { username, password }),
};

export default usersService;
