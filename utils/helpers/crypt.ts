import { encode, decode } from "js-base64";

function encrypt(plainText: string, key: number) {
  const encodedText = encode(plainText);
  let encryptedText = "";
  for (let i = 0; i < encodedText.length; i++) {
    encryptedText += String.fromCharCode(encodedText[i].charCodeAt(0) + key);
  }
  return encryptedText;
}

function decrypt(encryptedText: string, key: number) {
  let encodedText = "";
  for (let i = 0; i < encryptedText.length; i++) {
    encodedText += String.fromCharCode(encryptedText[i].charCodeAt(0) - key);
  }
  return decode(encodedText);
}

function generate_key(inputString: string) {
  let sumCharCodes = 0;
  for (let i = 0; i < inputString.length; i++) {
    sumCharCodes += inputString[i].charCodeAt(0);
  }
  return sumCharCodes % 10;
}

export { encrypt, decrypt, generate_key };
