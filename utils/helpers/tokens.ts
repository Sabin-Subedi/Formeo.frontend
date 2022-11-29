let accessToken: string | undefined = undefined;
let refreshToken: string | undefined = undefined;
let registerToken: string | undefined = undefined;

export const logout = () => {
  accessToken = undefined;
  refreshToken = undefined;
  localStorage.clear();
  sessionStorage.clear();
};

export const setAccessToken = (s: string) => {
  accessToken = s;
  sessionStorage.setItem("accessToken", s);
};

export const getAccessToken = () => {
  if (accessToken === "" || accessToken === undefined) {
    const token = sessionStorage.getItem("accessToken");
    if (token) {
      accessToken = token;
    }
  }
  return accessToken;
};

export const setRefreshToken = (s: string) => {
  refreshToken = s;
  localStorage.setItem("refreshToken", s);
};

export const getRefreshToken = () => {
  if (refreshToken === "" || refreshToken === undefined) {
    const token = localStorage.getItem("refreshToken");
    if (token) {
      refreshToken = token;
    }
  }
  return refreshToken;
};

export const setRegisterToken = (s: string) => {
  registerToken = s;
  localStorage.setItem("registerToken", s);
};

export const getRegisterToken = () => {
  if (registerToken === "" || registerToken === undefined) {
    const token = localStorage.getItem("registerToken");
    if (token) {
      registerToken = token;
    }
  }
  return registerToken;
};
