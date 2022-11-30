import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { getURL } from "./utils";

interface MyAxiosRequestConfig extends AxiosRequestConfig {
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

    config;
    return config;
  },
  (error) => Promise.reject(error)
);

export const myAxiosRequest = (config: MyAxiosRequestConfig) => {
  if (config.name) {
    config.url = getURL(config.name);
    delete config.name;
  }

  return myaxios.request(config);
};

export default myaxios;
