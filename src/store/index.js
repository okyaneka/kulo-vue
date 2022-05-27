import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {
    'init-app': async function () {
      return new Promise((res) => {
        setTimeout(() => {
          res('ok');
        }, 1000);
      });
    },
  },
  modules: {},
});
