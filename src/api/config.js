import axios from 'axios'
import qs from 'qs'

const http = axios.create({
  timeout: 10000,
  withCredentials: true,
  headers: {
    'X-Requested-With': 'XMLHttpRequest'
  }
});

http.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  const url = config.url;
  if (url === '/uaa/form/pcToken') {
    config.headers.Authorization = 'Basic ' + window.btoa('xj_ms:secret') ;
  } else if (token && url !== '/uaa/user/refreshToken') {
    config.headers.Authorization = 'Bearer ' + token;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
})

export const POST = function(url, params, config) {
  return new Promise((resolve, reject) => {
    http.post(url, qs.stringify(params), config)
      .then((response) => {
        const res = response
        resolve(res.data)
      }).catch((error) => {
        reject(error);
      });
  })
}


export const GET = (url, params, config) => {
  return new Promise((resolve, reject) => {
    http.get(url, {
      params: params,
      ...config
    })
      .then((response) => {
        const res = response
        resolve(res.data);
      }).catch((error) => {
        reject(error);
      });
  })
}