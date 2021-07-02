import _axios from 'axios';
import axiosRetry from 'axios-retry';
import { setupInterceptorsTo } from '../middleware/interceptors';
import localStorage_api from '@/utils/local-storage';
import Token from '@/interfaces/store/Token';

function auth() {
  const gettedToken = localStorage_api.get('token') as Token;
  let token = "";

  if (gettedToken) {
    token = `${gettedToken.type} ${gettedToken.token}`
  }
  return token
}

const axios = setupInterceptorsTo(
  _axios.create({
    baseURL: 'http://localhost:3333/api/v1',
    timeout: 10000,
    transformRequest: [function (data, headers) {
      headers['Authorization'] = auth()
      return JSON.stringify(data)
    }],
    headers: {
      'Content-Type': 'application/json',
      "Accept": 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
    },
  }),
);

const retryDelay = (retryNumber = 0) => {
  const seconds = (retryNumber ** 2) * 1000;
  const randomMs = 1000 * Math.random();
  return seconds + randomMs;
};

axiosRetry(axios, {
  retries: 2,
  retryDelay,
  retryCondition: axiosRetry.isRetryableError,
});

export default axios;
