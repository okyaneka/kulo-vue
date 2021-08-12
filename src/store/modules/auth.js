import axios from "axios";
import storage, { AUTH_DATA } from "@/helper/storage";
import { auth as RESOURCE } from "@/router/api";

const SET_USER = "SET_USER";
const REMOVE_USER = "REMOVE_USER";

export default {
  namespaced: true,
  state: () => ({
    user: null,
  }),
  getters: { isLoggedIn: ({ user }) => user && !!user.token },
  mutations: {
    SET_USER: (state, user) => {
      state.user = user;
      storage.set(AUTH_DATA, user);
      axios.defaults.headers.common["Authorization"] = user.token;
    },
    REMOVE_USER: (state) => {
      state.user = {};
      storage.destroy(AUTH_DATA);
      delete axios.defaults.headers.common["Authorization"];
    },
  },
  actions: {
    async login({ commit }, data) {
      const RESPONSE = await axios.post(RESOURCE.login, data);
      commit(SET_USER, RESPONSE);
      return RESPONSE;
    },
    async register({ commit }, data) {
      const RESPONSE = await axios.post(RESOURCE.register, data);
      commit(SET_USER, RESPONSE);
      return RESPONSE;
    },
    async forgetPassword({ commit }, data) {
      const RESPONSE = await axios.post(RESOURCE.forgetPassword, data);
      commit(REMOVE_USER);
      return RESPONSE;
    },
    async resetPassword({ commit }, data) {
      const RESPONSE = await axios.post(RESOURCE.resetPassword, data);
      commit(REMOVE_USER);
      return RESPONSE;
    },
    async logout({ commit }) {
      commit(REMOVE_USER);
    },
    async check({ commit }) {
      try {
        const user = storage.get(AUTH_DATA);
        axios.defaults.headers.common["Authorization"] = user.token;
        await axios.get(RESOURCE.me);
        commit(SET_USER, user);
      } catch (error) {
        commit(REMOVE_USER);
      }
    },
  },
};
