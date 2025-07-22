import axios from 'axios';

const url = import.meta.env.VITE_APP_API_URL;

export const httpClient = axios.create({
  baseURL: url,
});
