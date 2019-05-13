import axios from 'axios';

const api = axios.create({
  baseURL: "https://course-node-backend.herokuapp.com"
});

export default api;
