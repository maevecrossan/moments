import axios from "axios";

axios.defaults.baseURL = 'https://drf-test-3b810d58330a.herokuapp.com'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;

// Logic to handle access and refresh tokens

// Intercept request
export const axiosReq = axios.create();

// Intercept response
export const axiosRes = axios.create();
