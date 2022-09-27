import axios from 'axios';

import { API_KEY, API_URL } from './constant';

axios.defaults.headers.common['Authorization'] = `Bearer ${API_KEY}`

const GET = (url: string, params?: {[key: string]: any}) => {
  return axios(`${API_URL}/${url}`, {params});
};

export {
  GET,
};
