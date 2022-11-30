import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getURL } from "./utils";

interface MyAxiosRequestConfig extends AxiosRequestConfig {
  baseURL?: string;
  name?: string;
  url?: string;
}

interface MyAxiosInstanceConfig extends AxiosInstance {
  request: (config: MyAxiosRequestConfig) => Promise<any>;
}

const myaxios: MyAxiosInstanceConfig = axios.create({
  timeout: 10000,
});

axios.interceptors.request.use(
  (config: MyAxiosRequestConfig) => {
    // Do something before request is sent
    if (config.name) {
      config.url = getURL(config.name);
    }
    config;
    return config;
  },
  (error) => Promise.reject(error)
);

export default myaxios;
