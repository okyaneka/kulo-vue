import URL from "@/router/api";
import axios from "axios";

const SET_DATA = "SET_DATA";
const SET_DETAIL = "SET_DETAIL";
const RESOURCE = URL["resource"];

export default {
  namespaced: true,
  state: () => ({
    data: {},
    detail: {},
  }),
  getters: {},
  mutations: {
    SET_DATA(state, data) {
      state.data = data;
    },
    SET_DETAIL(state, data) {
      state.detail = data;
    },
  },
  actions: {
    async get({ commit }, params) {
      const RESPONSE = await axios.get(RESOURCE.get, { params }).then((res) => res.data);
      commit(SET_DATA, RESPONSE.data);
      return RESPONSE;
    },
    async store({ commit }, data) {
      const RESPONSE = await axios.post(RESOURCE.store, data).then((res) => res.data);
      commit(SET_DETAIL, RESPONSE.data);
      return RESPONSE;
    },
    async show({ commit }, id, params) {
      const RESPONSE = await axios.get(RESOURCE.show(id), { params }).then((res) => res.data);
      commit(SET_DETAIL, RESPONSE.data);
      return RESPONSE;
    },
    async update({ commit }, id, data) {
      const RESPONSE = await axios.put(RESOURCE.update(id), data).then((res) => res.data);
      commit(SET_DETAIL, RESPONSE.data);
      return RESPONSE;
    },
    async destroy({ dispatch }, id) {
      const RESPONSE = await axios.delete(RESOURCE.delete(id)).then((res) => res.data);
      await dispatch("get");
      return RESPONSE;
    },
  },
};
