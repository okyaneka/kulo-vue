const AUTH_DATA = "AUTH_DATA";
const REDIRECT = "REDIRECT";

export { AUTH_DATA, REDIRECT };
export default {
  set: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  get: (name) => {
    return JSON.parse(localStorage.getItem(name));
  },
  destroy: (name) => {
    localStorage.removeItem(name);
  },
};
