import axios from "axios";
import { notifications as RESOURCE } from "@/router/api";

const SET_DATA = "SET_DATA";
const SET_NOTIF = "SET_NOTIF";
const PUSH_NOTIF = "PUSH_NOTIF";

export default {
  namespaced: true,
  state: () => ({
    data: {},
    detail: {},
    notifications: [],
  }),
  getters: {},
  mutations: {
    SET_DATA: (state, data) => (state.data = data),
    SET_NOTIF: (state, data) => (state.notifications = data),
    PUSH_NOTIF: (state, data) => state.notifications.push(...data),
  },
  actions: {
    async index({ commit }) {
      const params = { page: 1, limit: 5 };
      const RESPONSE = await axios.get(RESOURCE.index, params);
      commit(SET_DATA, RESPONSE);
      commit(SET_NOTIF, RESPONSE.items);
    },
    async more({ commit, state }, params) {
      params = { page: state.page, limit: state.limit, ...params };
      const RESPONSE = await axios.get(RESOURCE.index, params);
      commit(SET_DATA, RESPONSE);
      commit(PUSH_NOTIF, RESPONSE.items);
    },
  },
};
