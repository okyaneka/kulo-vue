const AUTH_DATA = "AUTH_DATA";

export { AUTH_DATA };

export default {
  set: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  get: (name) => {
    return JSON.parse(localStorage.getItem(name));
  },
  del: (name) => {
    localStorage.removeItem(name);
  },
};
