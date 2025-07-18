import axios from 'axios';

const url = import.meta.env.VITE_APP_API_URL;
console.log('API URL:', url);

export const httpClient = axios.create({
  baseURL: url,
});
