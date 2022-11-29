import { KEY_INPUT } from "@constants/env";
import { decrypt, encrypt, generate_key } from "./crypt";

export const setSessionData = (key: string, value: string) => {
  sessionStorage.setItem(key, JSON.stringify(value));
};

export const setEncodedSessionData = (key: string, value: string) => {
  const encryptedValue = encrypt(value, generate_key(KEY_INPUT));
  sessionStorage.setItem(key, JSON.stringify(encryptedValue));
};

export const getSessionData = (key: string) => {
  const item = sessionStorage.getItem(key);
  if (item) {
    return JSON.parse(item);
  }
  return undefined;
};

export const getEncodedSessionData = (key: string) => {
  const item = sessionStorage.getItem(key);
  if (item) {
    const encryptedValue = JSON.parse(item);
    return decrypt(encryptedValue, generate_key(KEY_INPUT));
  }
  return undefined;
};
