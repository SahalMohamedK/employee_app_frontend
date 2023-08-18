const TOKEN_KEY = 'auth_token';

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const getPayloadFromToken = () => {
  const token = getToken();
  let payload = token.split('.')[1];

  payload = atob(payload);

  return JSON.parse(payload);
};

export const getRoleFromToken = () => {
  const payload = getPayloadFromToken();

  return payload.role;
};
