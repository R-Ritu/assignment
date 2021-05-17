import axios, { AxiosRequestConfig } from 'axios';

const defaultHeaders = {
  'Content-Type': 'application/json',
};

const AxiosInstance =
  axios.create({
    // baseURL: process.env.API_URL,
    baseURL: 'localhost:3001',
    timeout: 60 * 1000,
    headers: {
      ...defaultHeaders,
    },
  });
export const interceptors = (store: any) => {
  AxiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
    const { getState } = store;
    const { access_token } = getState().user;
    config.headers = {
      ...defaultHeaders,
      'Authentication': access_token,
    };
    return config;
  }, (err) => { return Promise.reject(err); });

  AxiosInstance.interceptors.response.use((response) => {
    return response;
  }, (err) => err);
};
export default AxiosInstance;
