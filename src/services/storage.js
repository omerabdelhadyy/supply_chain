export const setItem = (key, value) => {
  return localStorage.setItem(key, JSON.stringify(value));
};
export const getItem = (key) => {
  let data = localStorage.getItem(key);
  return JSON.parse(data);
};
export const removeItem = (key) => {
  return localStorage.removeItem(key);
};
