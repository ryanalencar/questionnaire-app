import axios from 'axios';

const dev = !!(process.env.NODE_ENV === 'development');

export const api = axios.create({
  baseURL: dev
    ? 'http://localhost:3000/api'
    : 'https://questionnaire-app-pied.vercel.app/api',
});
