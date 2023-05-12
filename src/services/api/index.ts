import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:3000'
});

api.interceptors.response.use((response) => response, (error) => {
  if (error?.response?.status === 401) {
    localStorage.removeItem('token');
    localStorage.removeItem('currentUser');
    window.location.href = '/';
  }

  return Promise.reject(error);
});

api.interceptors.request.use((request) => {
  const token = localStorage.getItem('token');

  if (token) {
    request.headers['Authorization'] = `Bearer ${JSON.parse(token)}`;
  }
  return request;
});
