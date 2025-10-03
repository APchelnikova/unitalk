import axios from 'axios';

const API_TOKEN = import.meta.env.VITE_API_TOKEN;
export const API_BASE_URL = `https://${API_TOKEN}.mockapi.io/api`;

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
