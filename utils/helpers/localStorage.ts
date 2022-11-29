import { KEY_INPUT } from "@constants/env";
import { decrypt, encrypt, generate_key } from "./crypt";

export const setData = (key: string, value: string) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const setEncodedData = (key: string, value: string) => {
  const encryptedValue = encrypt(value, generate_key(KEY_INPUT));
  localStorage.setItem(key, JSON.stringify(encryptedValue));
};

export const getData = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return undefined;
};

export const getEncodedData = (key: string) => {
  const item = localStorage.getItem(key);
  if (item) {
    const encryptedValue = JSON.parse(item);
    return decrypt(encryptedValue, generate_key(KEY_INPUT));
  }
  return undefined;
};
