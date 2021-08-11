import Vue from "vue";
import Vuex from "vuex";
import modules from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    auth: modules("auth"),
    notification: modules("notification"),
  },
});
