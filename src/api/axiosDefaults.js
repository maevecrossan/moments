import axios from "axios";

axios.defaults.baseURL = 'https://drf-test-3b810d58330a.herokuapp.com'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true;