import apiEndpoints from "@constants/apiEndpoints";
import { API_BASE_URL } from "@constants/env";

export const appendBaseURL = (url: string) => {
  if (!API_BASE_URL?.endsWith("/")) {
    throw new Error("API_BASE_URL must end with a slash");
  }
  return `${API_BASE_URL}${url}`;
};

export const getURL = (name: string): string => {
  if (!apiEndpoints[name]) {
    throw new Error(`URL with name ${name} does not exist`);
  }
  return appendBaseURL(apiEndpoints[name]);
};
