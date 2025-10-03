import axios from 'axios';

export const API_TOKEN = '68de50cbd7b591b4b78f1320';
export const API_BASE_URL = `https://${API_TOKEN}.mockapi.io/api`;

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
