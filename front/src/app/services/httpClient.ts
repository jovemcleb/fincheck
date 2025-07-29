import axios from 'axios';
import { localStorageKeys } from '../config/localStorageKeys';
import { sleep } from '../utils/sleep';

const url = import.meta.env.VITE_APP_API_URL;

export const httpClient = axios.create({
  baseURL: url,
});

httpClient.interceptors.request.use(async (config) => {
  const token = localStorage.getItem(localStorageKeys.TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${JSON.parse(token)}`;
  }

  return config;
});

httpClient.interceptors.response.use(async (data) => {
  await sleep(500);

  return data;
});
