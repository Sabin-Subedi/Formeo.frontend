// api urls constant file
const apiEndpoints: {
  [key: string]: string;
} = Object.freeze({
  // authentication urls (login, register, etc.)
  login: "/auth/login/",
  register: "/auth/register/",
  refresh: "/auth/token/refresh/",
  "github-oauth-login": "/auth/oauth/github/login/",
});

export default apiEndpoints;
