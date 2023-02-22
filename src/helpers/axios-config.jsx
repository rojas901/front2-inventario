import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
    'Authorization': localStorage.getItem('Authorization')
  }
});

export default axiosInstance;