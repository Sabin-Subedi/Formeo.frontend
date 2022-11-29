import axios from "axios";

const myaxios = axios.create();

axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config;
    return config;
  },
  (error) => Promise.reject(error)
);
