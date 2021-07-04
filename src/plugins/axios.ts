import _axios from 'axios';
import axiosRetry from 'axios-retry';
import { setupInterceptorsTo } from '../middleware/interceptors';
import localStorage_api from '@/utils/local-storage';
import Token from '@/interfaces/store/Token';

export const url = "http://localhost:3333/api/v1"

export function auth() {
  const gettedToken = localStorage_api.get('token') as Token;
  let token = "";

  if (gettedToken) {
    token = `${gettedToken.type} ${gettedToken.token}`
  }
  return token
}

function axiosBuilder(file = false) {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS',
    "Accept": 'application/json'
  }

  const axios = setupInterceptorsTo(
    _axios.create({
      baseURL: url,
      timeout: 10000,
      headers,
      transformRequest: [function (data, headers) {
        if (file) {
          headers["Content-Type"] = 'multipart/form-data'
        } else {
          headers["Content-Type"] = 'application/json'
        }
        headers['Authorization'] = auth()
        return JSON.stringify(data)
      }],
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

  return axios
}


export const AxiosFile = axiosBuilder(true);
export default axiosBuilder();
