import axios, { AxiosRequestConfig } from 'axios';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const APIClient =
  axios.create({
    // baseURL: process.env.API_URL,
    baseURL: 'https://jsonplaceholder.typicode.com/',
    timeout: 60 * 1000,
    headers: {
      ...defaultHeaders,
    },
  });
export default APIClient;
