import axios from 'axios';
import constants from './constants';

const axiosInstance = (baseURL = constants.BASE_URL) => axios.create({
  baseURL,
});

export default axiosInstance;