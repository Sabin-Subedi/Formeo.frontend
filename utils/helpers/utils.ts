import apiEndpoints from "@constants/apiEndpoints";
import { API_BASE_URL } from "@constants/env";

export const appendBaseURL = (url: string) => {
  let baseUrl;
  if (!API_BASE_URL?.endsWith("/")) {
    baseUrl = url.startsWith("/")
      ? API_BASE_URL + url
      : API_BASE_URL + "/" + url;
  } else {
    baseUrl = url.startsWith("/")
      ? API_BASE_URL + url.slice(1)
      : API_BASE_URL + url;
  }
  return baseUrl;
};

export const getURL = (name: string): string => {
  if (!apiEndpoints[name]) {
    throw new Error(`URL with name ${name} does not exist`);
  }
  return appendBaseURL(apiEndpoints[name]);
};
