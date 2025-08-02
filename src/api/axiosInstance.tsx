// // api/axiosInstance.ts
// import axios from 'axios';

// const axiosInstance = axios.create({
//   baseURL: 'http://localhost:8000/api/', // Adjust to your backend URL
//   headers: {
//     'Content-Type': 'application/json',
//   },

// axiosInstance.ts
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  withCredentials: false,

});

export default axiosInstance;
